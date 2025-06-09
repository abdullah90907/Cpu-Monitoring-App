let cpuChart, memChart; 
let countdownInterval; 

$(document).ready(function () {
    function toggleDarkMode() {
        $("body").toggleClass("dark-mode");
        const isDarkMode = $("body").hasClass("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
        $(".fa-sun").toggle(!isDarkMode);
        $(".fa-moon").toggle(isDarkMode);
    }

    $(".dark-mode-toggle").on("click", function () {
        toggleDarkMode();
    });

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        $("body").addClass("dark-mode");
        $(".fa-sun").hide();
    } else {
        $(".fa-moon").hide();
    }
    
    // Add smooth animations to metric cards
    $('.metric-card').hover(
        function() {
            $(this).addClass('card-hover');
        },
        function() {
            $(this).removeClass('card-hover');
        }
    );
});

function createChart(chartElement, data) {
    let backgroundColor;
    let gradientColor;
    
    if (data > 80) {
        backgroundColor = '#ef4444'; 
        gradientColor = '#dc2626';
    } else if (data > 40) {
        backgroundColor = '#f59e0b'; 
        gradientColor = '#d97706';
    } else {
        backgroundColor = '#10b981'; 
        gradientColor = '#059669';
    }

    const ctx = chartElement.getContext('2d');
    
    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, backgroundColor);
    gradient.addColorStop(1, gradientColor);
    
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [data, 100 - data],
                backgroundColor: [gradient, '#e5e7eb'],
                borderWidth: 0,
                cutout: '75%',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 1000,
                easing: 'easeOutCubic'
            }
        }
    });
    return chart;
}

function updateCharts() {
    if (data) {
        if (cpuChart) {
            cpuChart.destroy();
        }
        if (memChart) {
            memChart.destroy();
        }

        cpuChart = createChart(document.getElementById('cpu-chart'), data.cpu_usage);
        memChart = createChart(document.getElementById('mem-chart'), data.mem_usage);
        
        // Add animation to usage values
        animateValue('cpu-usage', 0, data.cpu_usage, 1000);
        animateValue('mem-usage', 0, data.mem_usage, 1000);
    }
}

function animateValue(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const startTime = performance.now();
    
    function updateValue(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.round(start + (range * easeOutCubic(progress)));
        
        element.textContent = currentValue + '%';
        
        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }
    
    requestAnimationFrame(updateValue);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function updateNextUpdateTime(nextUpdate) {
    clearInterval(countdownInterval);

    countdownInterval = setInterval(function () {
        const now = new Date();
        const remainingTime = Math.max(Math.floor((nextUpdate - now) / 1000), 0);

        $("#next-update-time").text(remainingTime > 0 ? "" + remainingTime + "s" : " 0s");

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000); 
}

function updateData() {
    $.ajax({
        url: "/data",
        type: "GET",
        dataType: "json",
        success: function (responseData) {
            data = responseData;
            
            // Update usage text without animation first time
            if (!cpuChart && !memChart) {
                $("#cpu-usage").text(data.cpu_usage + "%");
                $("#mem-usage").text(data.mem_usage + "%");
            }

            // Update alert message with animation
            const alertElement = $("#msg");
            alertElement.fadeOut(200, function() {
                if (data.msg === "Warning") {
                    alertElement.removeClass("alert-ok").addClass("alert-warning");
                    alertElement.html('<i class="fas fa-exclamation-triangle"></i> System Status: Warning - CPU or Memory usage is above 80%');
                } else {
                    alertElement.removeClass("alert-warning").addClass("alert-ok");
                    alertElement.html('<i class="fas fa-check-circle"></i> System Status: Everything is running smoothly.');
                }
                alertElement.fadeIn(200);
            });

            var now = new Date();
            var nextUpdate = new Date(now.getTime() + 5000);
            updateNextUpdateTime(nextUpdate);
            updateCharts();
        },
        error: function () {
            console.log("Error fetching data.");
            // Show error message
            $("#msg").removeClass("alert-ok alert-warning").addClass("alert-warning");
            $("#msg").html('<i class="fas fa-exclamation-circle"></i> Error: Unable to fetch system data.');
        }
    });
}

function toggleDarkMode() {
    $("body").toggleClass("dark-mode");
}

// Initialize
updateData();
setInterval(updateData, 5000);

// Add some CSS animation classes dynamically
$('<style>')
    .prop('type', 'text/css')
    .html(`
        .card-hover {
            transform: translateY(-5px) !important;
            box-shadow: var(--shadow-hover) !important;
        }
        
        .usage-value.updating {
            animation: valueUpdate 0.5s ease-out;
        }
        
        @keyframes valueUpdate {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `)
    .appendTo('head');