import React from "react";
import ReactDOMClient from "react-dom/client";
import { BuyTrailing } from "./screens/BuyTrailing";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<BuyTrailing />);
