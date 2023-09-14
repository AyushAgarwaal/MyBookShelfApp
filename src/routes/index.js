
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookShelf from '../components/bookShelf';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: "/books",
        element: <BookShelf />
    },


]);

// export default router;