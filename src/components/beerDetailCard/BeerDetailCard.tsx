import {  useNavigate, useParams } from 'react-router-dom';
import { IBeer } from '../../../interface/IBeer';
import './BeerDetailCard.css'
import { useEffect, useState } from 'react';

interface IDetailCardProps{
    beer: IBeer [] | IBeer |null; // or IBeer|null added AI suggestion
    
}
const BeerDetailCard:React.FC<IDetailCardProps> = ({beer}) => {

    const [singleBeer, setSingleBeer] = useState<null | IBeer>(null)
    /* console.log(beer); */
    const {id} = useParams()
    console.log(id);
   /*  console.log(beer); */
    

    /* const location = useLocation() */ //to get whole path, do i need this?

    const navigate = useNavigate() // to navigate to previous page on button click

    
    useEffect(() => {
        if(Array.isArray(beer))// added AI suggestion
        if(beer && id) {
            const findBeerById = beer.find((singleBeer) => Number(singleBeer._id) === Number(beer))
            setSingleBeer(findBeerById|| null)
        } else {
            console.log('Sorry, we could not find this beer or id');
            
        } else{
            setSingleBeer(beer)// added AI suggestion 
        }
    }, [beer,id]);

    if(!singleBeer) return <p>'Loading 🍻...</p>

    return ( 

        <>
    
            <article className='detail-card' >
                <img src={singleBeer?.image_url} alt="an image of your new favorite 🍺" />
                <h4>{singleBeer?.name}</h4>
                <p className='tagline'>{singleBeer?.tagline}</p>
                <div className='brew-date'>
                    <p>First brewed:</p>
                    <p>{singleBeer?.first_brewed}</p>
                </div>
                <div className='att-level'>
                    <p>Attenuation level:</p>
                    <p>{singleBeer?.attenuation_level}</p>
                </div>
                <p className='description'>{singleBeer?.description}</p>
                <button onClick={() => navigate(-1)} type="button" className='go-back_btn'><img src="./IMGs/BackArrow.png" alt="go to previous page" /></button>
            </article>
        </>
     );
}
 
export default BeerDetailCard;
