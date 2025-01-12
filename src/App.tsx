
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import BeerList from './pages/beerList/BeerList'
import DetailView from './pages/detailView/DetailView'
import RandomView from './pages/randomView/RandomView'
import { useEffect, useState } from 'react'
import { IBeer } from '../interface/IBeer'
import NotFound404 from './pages/notFound404/NotFound404'


/* interface IDetailProps{
  beer: IBeer[]
} */

function App() {

  const[beers,setBeers] = useState<IBeer[]>([])


    useEffect(() => {
      
      fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => res.json())
      .then((data) => setBeers(data))
      
      
    }, [])
    
    console.log(beers);
    
  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
      <Route path='/' index element={<Home/>}/>
      <Route path='/beerList' element={<BeerList beers={beers}/>}/> // click on all beers
      <Route path='/detailView/:id' element={<DetailView beers={beers}  />}/> //via click on details btn 
      <Route path='/randomView' element={<RandomView/>}/>
      <Route path='*' element={<NotFound404/>}/>


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
