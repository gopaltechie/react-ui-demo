import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page-1";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import CustomerList from "./modules/customers/CustomerList";

function AppRoutes() {
    return (
        <div style={{ padding: 20 }}>
            <Routes>
                <Route path="/dashboard" exact element={<Dashboard />}/>
                <Route path="/page1" element={<Page1 />}/>
                <Route path="/customer-list" element={<CustomerList />}/>
                {/* <Route path="/page-2" component={Page2}/>
                <Route path="/page-3" component={Page3}/> */}
                <Route component={<NotFound />}/>
            </Routes>
        </div>
    )
}

export default AppRoutes;