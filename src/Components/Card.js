import '../Styles/Card.css';
import rate from '../assets/rate.png';

const Card = ({ item }) => {
    return (
        <div className="card">
            <img className="image mb-5" src={item.image} />
            <div className="title mb-5">{item.title}</div>
            <div style={{ display: "flex",justifyContent:"space-between",}}>
                <div className="category mb-5">{item.category}</div>
                <div className="rating mb-5">
                    <span style={{ display: "flex", }}>
                        <img src={rate} className="star" />
                        {item.rating?.rate}/{item.rating.count} voters
                    </span>
                </div>
            </div>
            <p className="description mb-5">{item.description}</p>
            <div className="price mb-5">Price: {item.price}$</div>
        </div>
    )
}

export default Card;