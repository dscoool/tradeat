import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Market } from "./screens/Market";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<BrowserRouter><Market /></BrowserRouter>);
