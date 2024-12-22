
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import BeerList from './pages/beerList/BeerList'
import DetailView from './pages/detailView/DetailView'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
      <Route path='/' index element={<Home/>}/>
      <Route path='beerList' element={<BeerList/>}/>
      <Route path='/detailView/:id' element={<DetailView/>}/>

      </>
    )
  )
 

  return (
    <>
    <RouterProvider router = {router}/>
     
    </>
  )
}

export default App
