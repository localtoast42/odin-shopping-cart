import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const CardContainer = () => {

    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=5", { mode: "cors" })
            .then((response) => response.json())
            .then((response) => setItemList(response))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            {itemList.map(item => <ProductCard key={item.id} item={item}/>)}
        </div>
    );
};

export default CardContainer;