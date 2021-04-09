import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';

import {Navbar, Products} from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    // response -> data
    const {data} = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    // response -> cart
    const cart = await commerce.cart.retrieve();
    setCart(cart);

    // oneliner => setCart(await commerce.cart.retrieve())
  };

  const handleAddToCart = async (productId, quantity) => {
    // response -> item
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
