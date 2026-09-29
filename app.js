import React,{lazy, Suspense, useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import "./src/index.css";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
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

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
   const [userName, setUserName] = useState();
   //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Naveen",
    };
    setUserName(data.name);
  }, []);

    return ( 
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>         
        <div className="app">
            <h1>Naveen - Food delivery service</h1>
            <Header />           
            <Outlet />
          </div>
      </UserContext.Provider>
            
        );
    };

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
        },
        {
            path: "/grocery",
            element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                <Grocery />
              </Suspense>
              ),
        },
        {
            path: "/restaurants/:resId",  
            element: <RestaurantMenu />
        }
      ],
            errorElement: <Error />
        },
        
    ]);

    const root = createRoot(document.getElementById('root'));
    root.render(<RouterProvider router={appRouter} />);
    //root.render(<AppLayout />);