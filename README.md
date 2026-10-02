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
# Naveen Food Delivery App

A React food delivery learning application for browsing restaurants, filtering results, viewing restaurant routes, and experimenting with shared state and client-side routing.

## Features

- Fetches restaurant data from the Swiggy restaurant-list API.
- Displays restaurant cards with images, cuisines, ratings, delivery time, and cost for two.
- Searches restaurants by name and filters restaurants rated 4.4 or higher.
- Shows a shimmer loading state while restaurant data is loading.
- Provides Home, About, Contact, Grocery, restaurant menu, and Cart routes.
- Lazy-loads the About and Grocery pages with `React.lazy` and `Suspense`.
- Displays the current online/offline browser status in the header.
- Includes a login/logout toggle and an editable username powered by React Context.
- Uses Redux Toolkit for cart state, including add, remove, and clear actions.
- Includes a reusable item-list component for rendering food items and dispatching cart actions.

## Tech Stack

- React 19
- React Router DOM 6
- Redux Toolkit and React Redux
- Parcel
- JavaScript
- Tailwind CSS/PostCSS
- Jest and React Testing Library

## Project Structure

```text
FoodOrderApp/
├── app.js                         # Application entry point and route configuration
├── index.html
├── package.json
├── babel.config.js
├── jest.config.js
├── images/
│   └── foodlogo.png
├── src/
│   ├── index.css
│   ├── components/
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── Cart.js
│   │   ├── Contact.js
│   │   ├── Error.js
│   │   ├── Grocery.js
│   │   ├── Header.js
│   │   ├── ItemList.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantMenu.js
│   │   ├── Shimmer.js
│   │   ├── User.js
│   │   └── __tests__/
│   └── utils/
│       ├── appStore.js            # Redux store configuration
│       ├── cartSlice.js            # Cart state and actions
│       ├── constants.js            # API endpoints and image URLs
│       ├── mockData.js
│       ├── UserContext.js
│       ├── useOnlineStatus.js
│       └── useRestaurantMenu.js
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the Parcel development server:

```bash
npm start
```

Open the local URL shown in the terminal, usually `http://localhost:1234`.

Create a production build with:

```bash
npm run build
```

## Testing

Run the Jest test command with:

```bash
npm test
```

Jest uses the `jsdom` environment and collects coverage. Tests can be added under `src/components/__tests__/` or in files matching Jest's default test patterns.

## API and Current Limitations

- Restaurant and menu data come from external Swiggy endpoints configured in [src/utils/constants.js](src/utils/constants.js).
- The API response shape and availability are outside the application's control; the app requires network access and may need updated endpoints if Swiggy changes them.
- This project is designed as a frontend self learning app and not a production-ready food ordering platform.

##Setting up testing in our App
- Install react testing library
- Install jest
- Install babel dependencies
- Configure babel
-configure parcel config file to disable default babel transpilation
- jest configuration
- npx create-jest
- npm install -D jest-environment-jsdom
- npm install -D @babel/preset-react  - to make JSX work in test cases
- include this babel/preset-react library in babel configuration babel-config.js file
- npm i -D @testing-library/jest-dom
## License

This project is for educational and self learning purposes.
