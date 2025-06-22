// Weather API configuration
const API_KEY = 'demo_key';

// Weather icon mapping
const weatherIcons = {
    '01d': '☀️', '01n': '🌙', '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️', '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️', '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️', '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
};

// Initialize particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Search functionality
function searchWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        fetchWeatherData(city);
    }
}

// Handle Enter key press
document.getElementById('cityInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

// Simulated weather data (since we can't use real API without key)
function fetchWeatherData(city) {
    showLoading(true);
    hideError();

    // Simulate API delay
    setTimeout(() => {
        const mockData = generateMockWeatherData(city);
        updateWeatherDisplay(mockData);
        showLoading(false);
    }, 1000);
}

function generateMockWeatherData(city) {
    const temperatures = [15, 18, 22, 25, 28, 30, 32];
    const conditions = ['sunny', 'cloudy', 'rainy', 'partly cloudy', 'clear'];
    const icons = ['☀️', '⛅', '🌧️', '☁️', '🌤️'];

    const temp = temperatures[Math.floor(Math.random() * temperatures.length)];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const icon = icons[Math.floor(Math.random() * icons.length)];

    return {
        name: city,
        main: {
            temp: temp,
            humidity: Math.floor(Math.random() * 40) + 40,
            pressure: Math.floor(Math.random() * 50) + 1000
        },
        weather: [{
            main: condition,
            description: condition,
            icon: '01d'
        }],
        wind: {
            speed: Math.floor(Math.random() * 20) + 5
        },
        visibility: Math.floor(Math.random() * 5) + 8,
        forecast: generateForecast()
    };
}

function generateForecast() {
    const days = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday'];
    const icons = ['☀️', '⛅', '🌧️', '☁️', '🌤️'];

    return days.map(day => ({
        day: day,
        icon: icons[Math.floor(Math.random() * icons.length)],
        high: Math.floor(Math.random() * 15) + 20,
        low: Math.floor(Math.random() * 10) + 10
    }));
}

function updateWeatherDisplay(data) {
    document.getElementById('temperature').textContent = Math.round(data.main.temp) + '°C';
    document.getElementById('location').textContent = data.name;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('mainIcon').textContent = weatherIcons[data.weather[0].icon] || '☀️';

    document.getElementById('humidity').textContent = data.main.humidity + '%';
    document.getElementById('windSpeed').textContent = data.wind.speed + ' km/h';
    document.getElementById('pressure').textContent = data.main.pressure + ' hPa';
    document.getElementById('visibility').textContent = data.visibility + ' km';

    // Update forecast
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';

    data.forecast.forEach(item => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
                    <span class="forecast-day">${item.day}</span>
                    <span class="forecast-icon">${item.icon}</span>
                    <span class="forecast-temp">${item.high}°/${item.low}°</span>
                `;
        forecastContainer.appendChild(forecastItem);
    });

    // Update background based on weather
    updateBackgroundTheme(data.weather[0].main.toLowerCase());
}

function updateBackgroundTheme(condition) {
    const body = document.querySelector('.animated-bg');
    let gradient;

    switch (condition) {
        case 'clear':
        case 'sunny':
            gradient = 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)';
            break;
        case 'rain':
        case 'rainy':
            gradient = 'linear-gradient(45deg, #4facfe, #00f2fe, #667eea, #764ba2)';
            break;
        case 'cloudy':
        case 'clouds':
            gradient = 'linear-gradient(45deg, #667eea, #764ba2, #a8edea, #fed6e3)';
            break;
        default:
            gradient = 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)';
    }

    body.style.background = gradient;
    body.style.backgroundSize = '400% 400%';
}

function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
    document.getElementById('weatherContent').style.display = show ? 'none' : 'grid';
}

function hideError() {
    document.getElementById('error').style.display = 'none';
}

function showError() {
    document.getElementById('error').style.display = 'block';
    showLoading(false);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
    createParticles();

    // Try to get user's location for default weather
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // In a real app, you'd reverse geocode the coordinates
                fetchWeatherData('Your Location');
            },
            () => {
                // Default to a sample city
                fetchWeatherData('New York');
            }
        );
    } else {
        fetchWeatherData('New York');
    }
});

// Add smooth scrolling and interactive effects
document.querySelectorAll('.detail-item, .forecast-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple effect to search button
document.querySelector('.search-btn').addEventListener('click', function (e) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255,255,255,0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = (e.clientX - e.target.offsetLeft) + 'px';
    ripple.style.top = (e.clientY - e.target.offsetTop) + 'px';

    this.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
