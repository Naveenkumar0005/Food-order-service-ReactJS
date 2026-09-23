# Naveen Food Delivery App

A React-based food ordering and restaurant browsing application built to practice real-world frontend concepts such as API integration, component-based architecture, search/filter logic, and React Router navigation.

## Overview

This app simulates a food delivery experience with:

- a navigation header with Home, About, and Contact links
- restaurant cards showing image, cuisine, rating, delivery time, and cost
- live restaurant data fetched from a Swiggy-style API
- search functionality by restaurant name
- a Top Rated Restaurants filter
- loading shimmer UI while data loads
- route-based pages using React Router

## Tech Stack

- React
- React Router DOM
- Parcel
- JavaScript
- HTML & CSS

## Current Features

- Fetches restaurant data from the Swiggy API endpoint configured in the app
- Displays restaurant cards with image, cuisine, rating, ETA, and pricing
- Includes a search box to filter restaurants dynamically
- Includes a Top Rated Restaurants button with rating-based filtering
- Shows a shimmer loading state before data arrives
- Uses client-side routing for Home, About, and Contact pages
- Includes a login/logout toggle button in the header

## Project Structure

```bash
FoodOrderApp/
├── app.js
├── index.css
├── index.html
├── package.json
├── README.md
├── images/
│   └── foodlogo.png
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── Contact.js
│   │   ├── Error.js
│   │   ├── Header.js
│   │   ├── RestaurantCard.js
│   │   └── Shimmer.js
│   └── utils/
│       ├── constants.js
│       └── mockData.js
└── dist/
```

## Getting Started

1. Clone the repository:

```bash
git clone <your-repository-url>
cd FoodOrderApp
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npx parcel index.html
```

4. Open the app in the browser using the local URL shown in the terminal, typically:

```bash
http://localhost:1234
```

## Notes

- This project is designed as a frontend learning app and not a production-ready food ordering platform.
- Restaurant data is currently powered by an external Swiggy API endpoint configured in [src/utils/constants.js](src/utils/constants.js).
- The app is intentionally structured to practice React concepts such as state, effects, routing, conditional rendering, and reusable components.

## License

This project is for educational and learning purposes.
