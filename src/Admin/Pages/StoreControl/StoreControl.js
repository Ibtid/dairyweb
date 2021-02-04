import React from 'react';
import './StoreControl.css';
import Logo from '../../../SharedComponents/UIComponent/Logo/Logo';
import Form from '../../Components/Form/Form';
import ProductsDisplay from '../../Components/ProductsDisplay/ProductsDisplay';

const StoreControl = () => {
  return (
    <div className='StoreControl'>
      <div className='StoreControl__Logo'>
        <Logo />
      </div>
      <Form />
      <ProductsDisplay />
    </div>
  );
};

export default StoreControl;
