import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Playlist from './Playlist'
import Search from './Search'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

//helped figure out how to use different pages: https://www.youtube.com/watch?v=o05ZP6_JQqE

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "playlists",
        element: <Playlist/>
    },
    {
        path: "search",
        element: <Search/>
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
