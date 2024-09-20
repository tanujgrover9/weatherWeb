Weather Forecast Application
A weather forecast application built using React.js that fetches and displays real-time weather data for cities. This app allows users to view current weather and a 5-day forecast, along with a toggle for Celsius and Fahrenheit.

Table of Contents
Features
Technologies Used
Setup Instructions
Assumptions
How to Use the Application
Future Enhancements
Features
Displays current weather (temperature, condition, weather icon) for a default city.
Allows users to search for weather in other cities.
Shows a 5-day weather forecast with daily high/low temperatures.
Unit conversion between Celsius and Fahrenheit.
Responsive design that adapts to all screen sizes.
Error handling for invalid cities and API call failures.
Technologies Used
React.js
CSS (for styling)
OpenWeatherMap API (for fetching weather data)
Setup Instructions
1. Clone the repository
First, clone this repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/weather-forecast-app.git
2. Install dependencies
Navigate to the project directory and install the dependencies using npm or yarn:

bash
Copy code
cd weather-forecast-app
npm install
or

bash
Copy code
yarn install
3. Obtain an OpenWeatherMap API Key
You'll need an API key from OpenWeatherMap to fetch the weather data. Follow these steps:

Sign up at OpenWeatherMap.
Generate an API key from your account.
Replace the placeholder YOUR_OPENWEATHERMAP_API_KEY in the App.js file with your actual API key.
4. Run the project
Start the development server by running the following command:

bash
Copy code
npm start
or

bash
Copy code
yarn start
The application will run locally on http://localhost:3000/.

Assumptions
The default city displayed when the app loads is New York.
API calls are made for the current weather and a 5-day forecast simultaneously.
In case of invalid city names or network issues, an appropriate error message is displayed to the user.
Unit conversion is based on manual logic, and toggling between Celsius and Fahrenheit is managed via React state.
The app is responsive and works on various screen sizes and devices.
How to Use the Application
Search for a city: Type the name of any city in the search bar at the top and hit enter or click "Search". The current weather and a 5-day forecast for that city will be displayed.
Switch between temperature units: Use the "Switch to Fahrenheit/Celsius" button to toggle between temperature units.
View the forecast: Below the current weather, you can see a 5-day forecast with high and low temperatures, along with weather conditions.
Future Enhancements
Implement offline caching so that users can see previously searched city data when offline.
Add pull-to-refresh functionality for mobile devices.
Implement performance optimizations such as lazy loading components or API call debouncing.
Improve the design with more detailed weather information (e.g., wind speed, humidity, etc.).