import '@/reset.scss';
// import classNames from 'classnames/bind';
// import classes from '@/App.module.scss';
// import Header from '@/components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home.tsx';
import Cart from '@/pages/Cart';
import Course from '@/pages/Course';
import Account from '@/pages/Account.tsx';
import Device from '@/pages/Device';
import RootLayout from '@/pages/RootLayout';
import Error from '@/pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    loader: RootLayout.loader,
    children: [
      { index: true, element: <Home /> }, // path: '/'
      { path: '/cart', element: <Cart /> },
      { path: '/course', element: <Course /> },
      { path: '/device', element: <Device /> },
      { path: '/account', element: <Account /> },
    ],
  },
]);

const App = () => {
  // const cx = classNames.bind(classes);

  return <RouterProvider router={router} />;
};

export default App;
