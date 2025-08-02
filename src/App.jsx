import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <Dashboard /> },
               {path: "/orders", element: <Orders /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;