import "./CardContainer.css";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

const CardContainer = () => {

    const [itemList, setItemList] = useState([]);
    const [shoppingCart, setShoppingCart] = useOutletContext();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=20", { mode: "cors" })
            .then((response) => response.json())
            .then((response) => setItemList(response))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="card-container">
            {itemList.map(item => <ProductCard 
                key={item.id} 
                item={item} 
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart} />
            )}
        </div>
    );
};

export default CardContainer;