import React from "react";
import ReactDOM from "react-dom/client"
import App from './App'
import './global.css'
import './Fonts/font.css'
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav />
            <App />
        </BrowserRouter>
    </React.StrictMode>
)