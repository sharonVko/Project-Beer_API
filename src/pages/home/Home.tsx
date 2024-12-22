import { Link } from "react-router-dom";
import "./Home.css"


const Home = () => {
    return ( 
        <>
       
        <section>
        <Link to={'/beerlist'}>
                <img src="./IMGs/AllBeers.png" alt="Beer collection img" />
        </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            
        </section>
        <section>
            <Link to={'/'}>
            <img src="./IMGs/RandomBeer.png" alt="Random beer ollection img" />
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
        </section>
        
        </>
     );
}
 
export default Home;
            