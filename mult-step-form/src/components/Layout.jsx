import React from "react";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
    return (
        <div className="layout-container">
            <Dashboard />
            <main>
                <Outlet />
            </main>
        </div>
    );
}