# Time4Salat

Time4Salat

## Description

Time4Salat is a web application that displays:

The current time (real-time clock).

The full date in both Gregorian and Hijri calendars.

A list of countries worldwide.

Islamic prayer times for the selected country, calculated automatically via the Aladhan API.

The app uses HTML, CSS, and JavaScript only, with API calls to fetch dynamic data.

## Features

1-Live Clock

2-Displays hours, minutes, and seconds in real-time.

3-Full Date (Gregorian + Hijri)

4-Automatically fetches today’s date.

5-Converts the Gregorian date to Hijri using the Aladhan API.

6-Country Selector

6.1-Alphabetically sorted list of countries loaded dynamically from a GitHub JSON.

6.2-Allows users to select a country to calculate prayer times.

7-Prayer Times

Displays Fajr, Dhuhr, Asr, Maghrib, and Isha.

Times are calculated according to the selected country and timezone.

Automatically updates when the user selects a different country.

## Technologies Used

HTML5

CSS3

JavaScript (ES6+)

Axios (via CDN) for HTTP requests

Bootstrap 5 for responsive design

Aladhan API for prayer times and Gregorian-Hijri conversion

GitHub JSON for country list

## Installation / Usage

Download the project

Clone the repository or download the HTML, CSS, and JS files.

Open index.html in a browser

Works on modern browsers: Chrome, Brave, Firefox, Edge.

Select a country

The app automatically displays prayer times for the selected country.

Times update according to the timezone.

## Notes

Prayer times may slightly differ depending on the calculation method and timezone configuration.

The app is fully client-side and does not require a server.

## License

This project is open-source and free to use, modify, and distribute.
