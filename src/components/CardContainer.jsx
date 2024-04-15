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
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {itemList.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

export default CardContainer;