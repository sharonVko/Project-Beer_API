import { Link } from "react-router-dom";
import "./FooterNav.css"

const FooterNav = () => {
    return ( 
        <>
        <footer>
            <Link to={'/'}>
            <img src="/IMGs/BeerLogo.png" alt="Logo" />
            </Link>
        </footer>
        </>
     );
}
 
export default FooterNav;