// page.js
"use client"; 


import React from "react";
import { Counter } from "./Counter.js";
import { TemperatureConverter } from "./TemperatureConverter.js";
import { LoginForm } from "./LoginForm.js";
import "./styles.css";


export default function Page() {
    return (
        <div>
            <Counter />
            <TemperatureConverter />
            <LoginForm />
        </div>
    );
}
