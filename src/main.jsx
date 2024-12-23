import React from "react";
 import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserContext";


ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <UserProvider >
            <RouterProvider router={router} />
        </UserProvider>
    </>
    
);