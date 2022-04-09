import {useState} from "react";
import ProductList from "./ProductList";

const initialProducts = [
    { product: "Basketball", price: 12.99 },
    { product: "Baseball", price: 9.99 },
    { product: "Tennis Racquet", price: 89.99 }
]

const WithPropsApp = () => {
    const [products, setProducts] = useState(initialProducts)
    
  return (
    <div>
      <h3>WithPropsApp</h3>
      <ProductList products={products}/>
    </div>
  );
};

export default WithPropsApp;
