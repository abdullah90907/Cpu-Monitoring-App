// Enhanced login script with animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    
    // Add focus animations to input fields
    inputs.forEach(input => {
        const inputField = input.closest('.input-field');
        
        input.addEventListener('focus', function() {
            inputField.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!input.value) {
                inputField.classList.remove('focused');
            }
        });
        
        // Check if input has value on page load
        if (input.value) {
            inputField.classList.add('focused');
        }
    });
    
    // Form submission with loading animation
    if (form) {
        form.addEventListener('submit', function(e) {
            // Don't prevent default - let the form submit naturally
            const button = form.querySelector('#login-button');
            
            // Add loading state
            button.classList.add('loading');
            button.disabled = true;
            
            // Add a slight delay to show the loading animation
            setTimeout(() => {
                // The form will submit naturally after this
            }, 100);
        });
    }
    
    // Add floating animation elements
    createFloatingElements();
    
    // Add keyboard navigation
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && index < inputs.length - 1) {
                e.preventDefault();
                inputs[index + 1].focus();
            }
        });
    });
});

function createFloatingElements() {
    // Create additional floating background elements
    for (let i = 0; i < 3; i++) {
        const element = document.createElement('div');
        element.style.cssText = `
            position: fixed;
            width: ${50 + Math.random() * 100}px;
            height: ${50 + Math.random() * 100}px;
            background: linear-gradient(45deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${6 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            z-index: -1;
            pointer-events: none;
        `;
        document.body.appendChild(element);
    }
}

// Add some dynamic styles
const style = document.createElement('style');
style.textContent = `
    .input-field.focused input {
        transform: translateY(-2px);
    }
    
    .input-field.error {
        animation: shake 0.5s ease-in-out;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .login-form {
        animation: loginFormEntry 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    @keyframes loginFormEntry {
        0% {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
`;
document.head.appendChild(style);