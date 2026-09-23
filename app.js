import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import "./index.css";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";

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
            <h1>Naveen - Food delivery service</h1>
            <Header />
            <Outlet />
            </div>
        );
    }

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
              {
                path: "/",
                element: <Body />
              },
              { 
          path: "/about",
          element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        }],
            errorElement: <Error />
        },
        
    ]);

    const root = createRoot(document.getElementById('root'));
    root.render(<RouterProvider router={appRouter} />);
    //root.render(<AppLayout />);