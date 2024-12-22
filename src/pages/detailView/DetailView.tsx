import BeerDetailCard from "../../components/beerDetailCard/BeerDetailCard";
import FooterNav from "../../components/footerNav/FooterNav";
import { IBeer } from '../../../interface/IBeer';

interface IDetailView {
    beer : IBeer[] 
}

const DetailView:React.FC<IDetailView> = ({beer}) => {
    console.log(beer);
    
    return ( 
        <>
        <h2>Detailview page</h2>
        <BeerDetailCard beer={beer}/>
        <FooterNav/>
        </>
     );
}
 
export default DetailView;