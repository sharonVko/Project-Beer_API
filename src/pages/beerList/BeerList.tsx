

import BeerPreviewCard from "../../components/beerPreviewCard/BeerPreviewCard";
import "./BeerList.css"
import FooterNav from "../../components/footerNav/FooterNav";
import { IBeer } from "../../../interface/IBeer";

interface IBeerlistProps{
    beers: IBeer[]
}

const BeerList:React.FC<IBeerlistProps> = ({beers}) => {
    
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
        
        