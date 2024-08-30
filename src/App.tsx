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
import { QueryClientProvider } from '@tanstack/react-query';
import Round from '@/pages/Round';
import { queryClient } from '@/libs/http';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // RootLayout은 이제 AppLayout의 자식
    errorElement: <Error />,
    loader: RootLayout.loader,
    children: [
      { index: true, element: <Home />, loader: Home.loader }, // path: '/'
      { path: '/cart', element: <Cart /> },
      { path: '/course', element: <Course /> },
      { path: '/round', element: <Round /> },
      { path: '/device', element: <Device /> },
      { path: '/account', element: <Account />, loader: Account.loader },
    ],
  },
]);

const App = () => {
  // const cx = classNames.bind(classes);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
