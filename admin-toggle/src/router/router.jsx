import { createBrowserRouter } from "react-router-dom";
import Main from "../page/main";

import UserListPage from "../page/user-list-page";
import RootLayout from "../components/layout/layout";
import AddUserPage from "../page/add-user-page";
import ProductListPage from "../page/product-lsit-page";
import ProductAddPage from "../page/product-add-page";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Main />,
            },
            {
                path: `/user-list`,
                element: <UserListPage />,
            },
            {
                path: `/user-add`,
                element: <AddUserPage />,
            },
            {
                path: `/product-list`,
                element: <ProductListPage />,
            },
            {
                path: `/product-add`,
                element: <ProductAddPage />,
            },
        ],
    },
]);
export default router;
