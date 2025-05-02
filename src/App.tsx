import { AppLayout } from './layout/AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { InfoPage } from './pages/InfoPage';
import { CycleTracker } from './pages/CycleTracker';
import { SymptomsPage } from './pages/SymptomsPage';
import { Flow } from './pages/Flow';
import { HomePage } from './pages/HomePage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/fill-your-info',
        element: <InfoPage />,
      },
      {
        path: '/track-your-cycle',
        element: <CycleTracker />,
      },
      {
        path: '/list-your-symptoms',
        element: <SymptomsPage />,
      },
      {
        path: '/track-your-flow',
        element: <Flow />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
