import PropTypes from "react"
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {title,image_url,details, _id} = news;
    return (
        <div className="card bg-base-100 shadow-xl my-5">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {
                details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`}><span className="text-blue-600 font-medium">See More...</span></Link></p> : <p>{details}</p>
            }
           </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};
NewsCard.propTypes = {
    news: PropTypes.object
}
export default NewsCard;