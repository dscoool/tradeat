import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BuyTrailing } from './screens/BuyTrailing/BuyTrailing'; 
import { Market } from "./components/Market/Market";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(<Market />);
