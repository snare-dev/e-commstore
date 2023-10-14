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

import { store } from './store';


import { loader as landingLoader } from './pages/Landing';
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as ordersLoader } from './pages/Orders';

import { action as registerAction } from "./pages/Register";
import { action as checkoutAction } from './components/CheckoutForm';
import { loader as checkoutLoader } from './pages/Checkout';
import { action as loginAction } from './pages/Login';



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
      element: <Checkout />,
      loader: checkoutLoader(store),
      action: checkoutAction(store)
    },
    {
      path: 'orders',
      element: <Orders />,
      loader: ordersLoader(store),
    }
  ] },
  { path: "/login", element: <Login />, errorElement: <Error />,action: loginAction(store) },
  { path: "/register", element: <Register />, errorElement: <Error />, action: registerAction },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </RouterProvider>
  );
};

export default App;
