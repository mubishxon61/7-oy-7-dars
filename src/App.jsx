import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import MainLayout from './layouts/MainLayout'
import Cart from './pages/Cart/Cart'
import Product from './pages/Product/Product'

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: < MainLayout/>,
            children:[

        {
            index: true,
            element: <Home/>,
        },
        {
            path: "/product/:id",
            element: <Product/>,
        },
        {
            path: '/cart',
            element: <Cart/>,
        }
    ]
        }
       
    
    ])
  return <RouterProvider router={router} />
}

export default App