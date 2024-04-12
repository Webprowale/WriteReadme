import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import EditTemplate from "../EditTemplate";
import Error from "../Error";


 export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/edit/:projectName',
        element: <EditTemplate />,
    },
    {
        path: '*',
        element: <Error />,
    }
 ])