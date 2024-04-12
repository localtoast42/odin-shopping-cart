import { useEffect } from "react";
import ProductCard from "./ProductCard";

const CardContainer = () => {

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=5", { mode: "cors" })
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <ProductCard />
        </div>
    );
};

export default CardContainer;