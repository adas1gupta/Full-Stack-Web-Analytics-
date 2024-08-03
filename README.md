# Fullstack Web Analytics

This project is a fullstack web analytics solution that measures page views for a website and its pages across various time intervals. It provides analytics for daily, weekend vs weekday, morning, afternoon, evening, weekly, and monthly page views.

## Features

- Tracks page views for individual pages
- Provides analytics for various time intervals:
  - Daily
  - Weekend vs Weekday
  - Morning (5 AM - 12 PM)
  - Afternoon (12 PM - 6 PM)
  - Evening (6 PM - 12 AM)
  - Weekly
  - Monthly
- Secure API endpoints with session and admin authentication
- MongoDB integration for data storage

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/fullstack-web-analytics.git
   cd fullstack-web-analytics
   ```

2. Set up the backend: 
    ```sh
    cd backend
    npm install
    ```

3. Create an '.env' file in the backend directory with the following content: 
    ```sh
    MONGO_URI=your_mongodb_connection_string
    SESSION_SECRET=your_session_secret
    ADMIN_SECRET=your_admin_secret
    ```

4. Set up the frontend: 
    ```sh
    cd ../frontend
    npm install
    ```

## Running the Project

1. Start the backend server:
    ```sh
    cd backend
    npm start
    ```

## API Endpoints
    ```sh
    - GET `/analytics/pageviews`: Get total page views
    - GET `/analytics/daily`: Get daily page views
    - GET `/analytics/weekly`: Get weekly page views
    - GET `/analytics/monthly`: Get monthly page views
    - GET `/analytics/morning`: Get morning page views
    - GET `/analytics/afternoon`: Get afternoon page views
    - GET `/analytics/evening`: Get evening page views
    ```

    Open the command prompt and run a cURL command to see the page views. 
