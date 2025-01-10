import BeerDetailCard from "../../components/beerDetailCard/BeerDetailCard";
import FooterNav from "../../components/footerNav/FooterNav";
import { IBeer } from '../../../interface/IBeer';
import { useParams } from "react-router-dom";

interface IDetailView {
    beers : IBeer[] 
}

const DetailView:React.FC<IDetailView> = ({beers}) => {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    
    const singleBeer = beers.find(b => b._id === id);
   /*  if (!beer) return <NotFound404/>; */
    console.log(singleBeer);
    
    return ( 
        <>
        <BeerDetailCard beer={singleBeer}/>
        <FooterNav/>
        </>
     );
}
 
export default DetailView;