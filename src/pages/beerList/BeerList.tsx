

import BeerPreviewCard from "../../components/beerPreviewCard/BeerPreviewCard";
import "./BeerList.css"
import { useEffect, useState } from "react";
import { IBeer } from '../../../interface/IBeer';
import FooterNav from "../../components/footerNav/FooterNav";


const BeerList = () => {
    const[beers,setBeers] = useState<IBeer[]>([])


    useEffect(() => {
        console.log(beers);
        
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => res.json())
        .then((data) => setBeers(data))
        
        
    }, [beers])
    return ( 
        <>
        <section className="beer-list">
        {beers?.map((beer, index) => (
       
        
        
            <BeerPreviewCard key={index} beer= {beer}/>
        
        ))}
        </section>
        <FooterNav/>
        </>
     );
}
 
export default BeerList;