import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Products,
  SingleProduct,
  Register,
  Login,
} from "./pages";

import { ErrorElement } from "./components";

import { loader as landingLoader } from './pages/Landing';
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';


const router = createBrowserRouter([
  { path: "/", element: <HomeLayout />, errorElement: <Error />, children: [
    {
      index: true,
      element: <Landing />,
      loader: landingLoader,
      errorElement: <ErrorElement />
    },
    {
      path: 'products',
      element: <Products />,
      loader: productsLoader,
      errorElement: <ErrorElement />
    },
    {
      path: 'products/:id',
      element: <SingleProduct />,
      loader: singleProductLoader,
      errorElement: <ErrorElement />
    },
    {
      path: 'cart',
      element: <Cart />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'checkout',
      element: <Checkout />
    },
    {
      path: 'orders',
      element: <Orders />
    }
  ] },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </RouterProvider>
  );
};

export default App;
