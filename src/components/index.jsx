import React from "react";
import ReactDOMClient from "react-dom/client";
import { SellTrailing } from "./screens/SellTrailing";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SellTrailing />);
