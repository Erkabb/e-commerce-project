"use client";

import axios from "axios";
import { Divide } from "lucide-react";
import { useEffect, useState } from "react";

 
const ProductDetail = () => {
    const [productData, setProductData] = useState<any[]>([]);
    const fetchProductData = async (pId?: string) => {
        try {
            const response = await axios.get(`http://localhost:8000/products/${pId}`);
            console.log("one product data:", response.data.product);
            setProductData(response.data.product);
        } catch (error) {
            console.log("get one product is failed", error);
        }
      
    };
    useEffect(() => {
        fetchProductData();
    }, []);
  
    return (

        <div>
            {productData?.map< React.ReactNode>((prod: any) => {
                return (
                <div>
                    <div> <img src={prod.images[0]} alt="" /></div>
                    <div>
                            <p>{prod.isBrandNew}</p>
                            <h1>{ prod.name}</h1>
                            <p>{prod.description}</p>
                            <p>{ prod.size}</p>
                        <button>Add to cart</button>
                            <h1>{ prod.price}</h1>
                
                    </div></div>);
            })}
        </div>
    )
};
export default ProductDetail;