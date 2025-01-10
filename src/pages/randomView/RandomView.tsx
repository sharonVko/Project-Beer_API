import { useEffect, useState } from "react";

import BeerDetailCard from "../../components/beerDetailCard/BeerDetailCard";
import { IBeer } from "../../../interface/IBeer";
import FooterNav from "../../components/footerNav/FooterNav";



const RandomView: React.FC= () => {
    const[randomBeer, setRandomBeer] = useState<null | IBeer >(null)


    useEffect(() => {
       fetch('https://ih-beers-api2.herokuapp.com/beers/random')
       .then((res) => res.json()) 
       .then((data) => setRandomBeer(data || null))
    },[])
    /* console.log(randomBeer); */
    

    return ( 
        <>
        <BeerDetailCard beer={randomBeer}/>
        <FooterNav/>
        </>
     );
}
 
export default RandomView
