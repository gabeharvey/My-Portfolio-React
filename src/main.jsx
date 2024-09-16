import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from '/components/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
);
