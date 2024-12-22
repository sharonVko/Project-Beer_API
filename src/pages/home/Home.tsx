import { Link } from "react-router-dom";
import "./Home.css"


const Home = () => {
    return ( 
        <div className="home-page">
       
        <section>
        <Link to={'/beerlist'}>
                <img src="./IMGs/AllBeers.png" alt="Beer collection img" />
        </Link>
                <p>Explore our wide variety of beers from around the world. </p>
            
        </section>
        <section>
            <Link to={'/randomView'}>
            <img src="./IMGs/RandomBeer.png" alt="Random beer collection img" />
            </Link>
            <p>Let us find your next favorite brew. </p>
        </section>
        
        </div>
     );
}
 
export default Home;
            