import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, Layout, ListPage, Login, Single } from "./components";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/listpage",
				element: <ListPage />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/:id",
				element: <Single />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
