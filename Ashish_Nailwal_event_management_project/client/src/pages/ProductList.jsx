import  { useState } from 'react';




const initialProducts = [
  { id: 1, name: 'Product 1', price: 10.99, quantity: 5 },
  { id: 2, name: 'Product 2', price: 15.99, quantity: 3 },
  { id: 3, name: 'Product 3', price: 19.99, quantity: 8 },
  { id: 4, name: 'Product 4', price: 7.99, quantity: 10 },
];
import "./ProductList.css"
import axios from 'axios';
const ProductList = () => {

    const [products, setProducts] = useState([]);

    const api = async()=>{

        let {data} =
        await axios.get("http://localhost:5000/api/auth/products");
        setProducts(data)
    }

    api()

    




  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to the cart here
    console.log(`Added product with ID ${productId} to the cart`);
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;