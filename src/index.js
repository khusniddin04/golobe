import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import HomePage from './pages/HomePage';
import FlightPage from './pages/FlightPage';
import HotelPage from './pages/HotelPage';
import AccountPage from './pages/AccountPage';

const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorElement/>,
  children: [
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/flight",
      element:<FlightPage/>
    },
    {
      path:"/hotel",
      element:<HotelPage/>
    },
    {
      path:"/account",
      element:<AccountPage/>

    }
  ]

}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);


