import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Search from './components/pages/Search'
import CreatePlay from './components/pages/CreatePlay'
import SongDisplay from "./components/pages/songDisplay";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-tooltip/dist/react-tooltip.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./components/pages/Login";

const handleLoginSuccess = () => {
    this.setState({ isAuthenticated: true });
};

//helped figure out how to use different pages: https://www.youtube.com/watch?v=o05ZP6_JQqE
//router has different pages path
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "search",
        element: <Search/>
    },
    {
        path: "login",
        element: <Login onLoginSuccess={handleLoginSuccess}/>
    },
    {
        path: "create",
        element: <CreatePlay/>
    },
    {
        path: "song_display",
        element: <SongDisplay/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

reportWebVitals();
