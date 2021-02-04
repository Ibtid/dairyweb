import React from 'react';
import Product from '../Product/Product';
import './Productslist.css';
import { useStateValue } from '../../../StateProvider/StateProvider';

const Productlist = (props) => {
  const [{ products }, dispatch] = useStateValue();
  console.log(products);

  return (
    <div className='productList'>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
          isAdmin={props.isAdmin}
        />
      ))}
    </div>
  );
};

export default Productlist;
