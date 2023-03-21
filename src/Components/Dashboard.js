import "../Styles/Dashboard.css";
import { useEffect, useState } from 'react';
import Card from "./Card";

const Dashboard = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length === 0) {
            fetch('https://fakestoreapi.com/products')
                .then((response) => response.json())
                .then((data) => {
                    setItems(data);
                })
                .catch(error => {
                    alert('Error fetching data:', error);
                });
        }
    }, []);


    return (
        <div className="container-grid">
            <div className="grid">
                {
                    items.map((item) =>
                        <Card item={item} />
                    )
                }
            </div>
        </div>
    )
}

export default Dashboard;