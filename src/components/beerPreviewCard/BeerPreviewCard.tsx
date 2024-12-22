import { Link } from "react-router-dom";
import "./BeerPreviewCard.css"
import { IBeer } from "../../../interface/IBeer";

interface IPrevCardProps{
    beer: IBeer;
}

const BeerPreviewCard:React.FC<IPrevCardProps> = ({beer}) => {
    return ( 
        <>
        <article className="card-body">
            <div className="preview-img">
                <img src={beer.image_url} alt="" />
            </div>
            <div className="preview-text">
                <h4>{beer.name}</h4>
                <p className="tagline">{beer.tagline}</p>
                <p>created by: {beer.name}</p>
                <Link to={`/detailView/${beer._id}`}>
                <button type="button" className="detail-btn">Details</button>
                </Link>
            </div>
        
        </article>
                <hr />
        
        </>
     );
}
 
export default BeerPreviewCard;