//import shirt1 from "../images/shirt-bg3.png"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`./images/${props.img}`} alt={props.name} className="card-image"/>
            <p><span className="bold">{props.brand}</span></p>
            <p>{props.name}</p>
            <p>${props.price}</p>
            <div className="card-stats">
                <img src={star} alt="star" className="card-star"/>
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewcount})</span>
            </div>
        </div>
    )
}

// Props - help us pass data into component making it more reusable
// text="hello"
//