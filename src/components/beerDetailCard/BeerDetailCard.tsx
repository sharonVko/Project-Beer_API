import {  useNavigate } from 'react-router-dom';
import { IBeer } from '../../../interface/IBeer';
import './BeerDetailCard.css'


interface IDetailCardProps{
    beer: IBeer | undefined | null
    
}
const BeerDetailCard:React.FC<IDetailCardProps> = ({beer}) => {

    const navigate = useNavigate() // to navigate to previous page on button click

    console.log(beer);
    
   

    return ( 

        <>
    
            <article className='detail-card' >
                <img src={beer?.image_url} alt="an image of your new favorite 🍺" />
                <h4>{beer?.name}</h4>
                <p className='tagline'>{beer?.tagline}</p>
                <div className='brew-date'>
                    <p>First brewed:</p>
                    <p>{beer?.first_brewed}</p>
                </div>
                <div className='att-level'>
                    <p>Attenuation level:</p>
                    <p>{beer?.attenuation_level}</p>
                </div>
                <p className='description'>{beer?.description}</p>
                <button onClick={() => navigate(-1)} type="button" className='go-back_btn'><img src="/IMGs/BackArrow.png" alt="go to previous page" /></button>
            </article>
        </>
     );
}
 
export default BeerDetailCard;
