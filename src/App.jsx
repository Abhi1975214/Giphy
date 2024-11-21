import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import AppLayout from "./layout/app-layout"
import Home from "./pages/Home"
import Search from "./pages/Search"
import SingleGif from "./pages/SingleGif"
import Favorites from "./pages/Favorites"
import Categories from "./pages/Categories"
import GifProvider from "./context/Context"


function App() {

  const router=createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/:category',
          element:<Categories/>
        },
        {
          path:'/search/:query',
          element:<Search/>
        },
        {
          path:'/:type/:slug',
          element:<SingleGif/>
        },
        {
          path:'/favorites',
          element:<Favorites/>
        },
      ]
    }
  ])
  return (
    <GifProvider>
    <RouterProvider router={router}></RouterProvider>
    </GifProvider>
  )
}

export default App
