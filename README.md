# 🖥️ Python System Monitor

<div align="center">

![System Monitor Dashboard](static/images/home%20page.png)

**A modern, real-time system monitoring web application built with Flask**

[![Python][Python]][Python-url] [![HTML5][HTML5]][HTML5-url] [![Flask][Flask]][Flask-url] [![JavaScript][JavaScript]][JavaScript-url] [![Docker][Docker]][Docker-url]

[View Demo](#screenshots) · [Report Bug](https://github.com/your-username/Python-System-Monitor/issues) · [Request Feature](https://github.com/your-username/Python-System-Monitor/issues)

</div>

---

## 📋 About The Project

The **Python System Monitor** is a sophisticated web-based application that provides real-time monitoring of your system's CPU and memory usage. Built with modern web technologies and featuring a sleek, responsive design, this tool offers both functionality and aesthetics for system administrators and developers.

### ✨ Key Features

- 🔄 **Real-time Monitoring**: Live CPU and memory usage tracking with 5-second updates
- 📊 **Interactive Charts**: Beautiful doughnut charts with color-coded status indicators
- ⚠️ **Smart Alerts**: Automatic warnings when usage exceeds 80% threshold
- 🌙 **Dark Mode**: Toggle between light and dark themes with persistent settings
- 🔐 **Secure Login**: Authentication system with session management
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, animated interface with glassmorphism effects
- 🐳 **Docker Support**: Easy deployment with containerization

### 🛠️ Built With

This project leverages modern web technologies and Python libraries:

- **Backend**: [Flask](https://flask.palletsprojects.com/) - Python web framework
- **System Monitoring**: [psutil](https://pypi.org/project/psutil/) - Cross-platform system information
- **Data Visualization**: [Chart.js](https://www.chartjs.org/) - Interactive charts
- **Session Management**: [Flask-Session](https://flask-session.readthedocs.io/) - Server-side sessions
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with animations and responsive design

---

## 📸 Screenshots

### 🔐 Login Page
![Login Interface](static/images/logout.png)
*Secure authentication with modern design and smooth animations*

### 🏠 Dashboard - Light Mode
![Dashboard Light Mode](static/images/home%20page.png)
*Clean, modern dashboard with real-time system metrics*

### 🌙 Dashboard - Dark Mode
![Dashboard Dark Mode](static/images/home%20page%20dark.png)
*Beautiful dark theme for comfortable viewing*

---

## 🚀 Getting Started

Follow these steps to get the System Monitor running on your local machine:

### 📋 Prerequisites

- **Python 3.7+** - Download from [python.org](https://www.python.org/downloads/)
- **pip** - Usually comes with Python installation
- **Git** - For cloning the repository

### ⚡ Quick Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Python-System-Monitor.git
   cd Python-System-Monitor
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python app.py
   ```

4. **Access the dashboard**
   - Open your browser and go to `http://localhost:5000`
   - Login with: **Username**: `admin` | **Password**: `admin`

---

## 🐳 Docker Deployment

### Using Docker

1. **Build the Docker image**
   ```bash
   docker build -t system-monitor .
   ```

2. **Run the container**
   ```bash
   docker run -p 5000:5000 system-monitor
   ```

3. **Access the application**
   - Navigate to `http://localhost:5000`
   - Login with: **Username**: `admin` | **Password**: `admin`

---

## 🌐 Deployment Options

Since this is a Flask application requiring server-side functionality, here are recommended deployment platforms:

### 🚀 **Recommended Platforms:**

1. **[Heroku](https://heroku.com)** - Easy Python app deployment
2. **[Railway](https://railway.app)** - Modern deployment platform
3. **[Render](https://render.com)** - Free tier available
4. **[PythonAnywhere](https://pythonanywhere.com)** - Python-focused hosting
5. **[DigitalOcean App Platform](https://digitalocean.com)** - Scalable deployment

### 📝 **Deployment Files Included:**
- `Dockerfile` - For containerized deployment
- `requirements.txt` - Python dependencies
- `Procfile` - For Heroku deployment (if needed)

---

## 💡 Features Overview

| Feature | Status | Description |
|---------|--------|-------------|
| ✅ Real-time Monitoring | Complete | Live CPU and memory tracking |
| ✅ Interactive Charts | Complete | Responsive doughnut charts with animations |
| ✅ Warning System | Complete | Alerts when usage exceeds 80% |
| ✅ Dark Mode | Complete | Toggle between light and dark themes |
| ✅ Responsive Design | Complete | Works on all devices |
| ✅ Authentication | Complete | Secure login system |
| ✅ Docker Support | Complete | Containerized deployment |
| 🔄 Historical Data | In Progress | Store and display historical metrics |
| 🔄 Multiple Users | Planned | Support for multiple user accounts |
| 🔄 Data Export | Planned | Download metrics as CSV |

---

## 🔧 Technical Details

### Architecture
- **Backend**: Flask web server with REST API endpoints
- **Data Source**: psutil library for system metrics
- **Frontend**: Modern HTML5/CSS3/JavaScript with Chart.js
- **Session Management**: Flask-Session for user authentication
- **Real-time Updates**: AJAX polling every 5 seconds

### API Endpoints
- `GET /` - Main dashboard (requires authentication)
- `POST /login` - User authentication
- `GET /data` - JSON API for system metrics
- `GET /logout` - Session termination

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Project Creator**: Your Name
- GitHub: [@abdullah90907](https://github.com/abdullah90907)
- Email: abdullahsiddique773@gmail.com
- LinkedIn: [mr-abdullah-siddique](https://www.linkedin.com/in/mr-abdullah-siddique/)

**Project Link**: [https://github.com/your-username/Python-System-Monitor](https://github.com/your-username/Python-System-Monitor)

---

## 🙏 Acknowledgments

- [Flask](https://flask.palletsprojects.com/) - The web framework that powers the backend
- [Chart.js](https://www.chartjs.org/) - Beautiful and responsive charts
- [psutil](https://github.com/giampaolo/psutil) - Cross-platform system monitoring
- [Font Awesome](https://fontawesome.com/) - Icons used throughout the interface

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**

Made with ❤️ for the developer community

</div>

<!-- MARKDOWN LINKS & IMAGES -->
[Python]: https://img.shields.io/badge/Python-3C873A?style=for-the-badge&labelColor=black&logo=python&logoColor=3C873A
[Python-url]: https://www.python.org
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: #
[Flask]: https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/2.3.x/
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: #
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&labelColor=black&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com




