
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import BeerList from './pages/beerList/BeerList'
import DetailView from './pages/detailView/DetailView'
import RandomView from './pages/randomView/RandomView'


/* interface IDetailProps{
  beer: IBeer[]
} */

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
      <Route path='/' index element={<Home/>}/>
      <Route path='/beerList' element={<BeerList/>}/> // click on all beers
      <Route path='/detailView/:id' element={<DetailView  />}/> //via click on details btn 
      <Route path='/randomView' element={<RandomView/>}/>


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
