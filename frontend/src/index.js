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
    this.setState({ isAuthenticated: true }, () => {
        // Navigate to the intended page after successful login
        this.navigate("/");
    });
};
//helped figure out how to use different pages: https://www.youtube.com/watch?v=o05ZP6_JQqE

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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
