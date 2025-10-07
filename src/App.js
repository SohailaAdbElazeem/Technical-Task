import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ProductList from './Component/ProductList/ProductList';
import MasterLayout from './Component/MasterLayout/MasterLayout';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import FilterSearch from './Component/FilterSearch/FilterSearch';
import ProductContextProvider from './context/ProductContext';

const router=createBrowserRouter([
  {path:'',element:<MasterLayout/>,children:[
    {path:'',element:<ProductList/>},
    {path:'product',element:<ProductList/>},
    {path:'prodDetail/:id',element:<ProductDetails/>},
    {path:'filtSearch',element:<FilterSearch/>},
  ]}
])
function App() {
  return (
    <ProductContextProvider>
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>

    </ProductContextProvider>
  );
}

export default App;
