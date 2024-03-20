import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login';
import Shimmer from './components/Shimmer';
import UserContext from './utils/userContext';

//lazy loading
const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {

    const [ userName, setUserName ] = useState()

    //Authentication
    useEffect(() => {
        //Make an API call and username and password
        const data = {
            name: "Biplab"
        }
        setUserName(data.name)
    }, [])

    return (
        <UserContext.Provider value={ { loggedInUser: userName, setUserName } }>
            <div className="app">
                <UserContext.Provider value={ { loggedInUser: "Elon Musk", setUserName } }>
                    <Header />
                </UserContext.Provider>
                <Outlet />
            </div>
        </UserContext.Provider>
    )
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
                element: <Suspense fallback={ <Shimmer /> }> <About /> </Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={ <Shimmer /> }> <Grocery /> </Suspense>
            }
        ],
        errorElement: <Error />
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={ appRouter } />);