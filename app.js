import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import "./index.css";

// we are going to create a food ordering app using react and parcel bundler
/*
* Header
  - logo
  - nav items

* Body
  - search bar
  - restaurant container
    - restaurant card
      - image
      - name
      - rating
      - cuisines
* Footer
  - copyright
  - Links
  - Address
  - Contact         
*/


const AppLayout = () => {
    return ( 
        <div className="app">
            <h1>Iraj- Food delivery service</h1>
            <Header />
            <Body />
            </div>
        );
    }

    const root = createRoot(document.getElementById('root'));
    root.render(<AppLayout />);