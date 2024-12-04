import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layouts/LayoutPublic"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import Destinos from "../pages/Destinos"
import MisPlanes from "../pages/MisPlanes"
import Contactos from "../pages/Contactos"
import Login from "../pages/Login"
import Register from "../pages/Register"


export const router = createBrowserRouter([
    {
        path:"/",
        element:<LayoutPublic/>,
        errorElement:<NotFound/>,
        children: [
            {
                index:true,
                element: <Home />,
            },
            {
                path:"/Destinos",
                element: <Destinos />,
        
            },
            {
                path:"/MisPlanes",
                element:<MisPlanes />,
            },
            {
                path:"/Contactos",
                element:<Contactos/>,
            
            },
            {
                path:"/Login",
                element:<Login/>,
            
            },
            {
                path:"/Register",
                element:<Register/>,
            
            },
            {
                path:"/Destinos",
                element:<Destinos/>
            },
            {
                path:"/Ciudades",
               
            }
        ]
    }
])