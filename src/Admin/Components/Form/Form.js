import React, { useState } from 'react';
import { useStateValue } from '../../../StateProvider/StateProvider';

import './Form.css';

const Form = () => {
  const [state, dispatch] = useStateValue();
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleImage = (event) => {
    /*const pickedFile = event.target.files[0];
    setFile(pickedFile);*/
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const addNewProduct = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      product: {
        name: name,
        price: price,
        image: image,
        description: description,
      },
    });
  };
  return (
    <div className='Form'>
      <div className='newProduct__header'>ADD PRODUCT</div>
      <form className='newProduct__form'>
        <div className='newProduct__inputSection'>
          <label className='newProduct__inputLabel' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            className='newProduct__input'
            id='name'
            name='name'
            placeholder='Enter Product Name'
            value={name}
            onChange={handleName}
          />
        </div>
        <div className='newProduct__inputSection'>
          <input
            type='file'
            className='newProduct__input'
            id='image'
            name='image'
            placeholder='Choose the image'
            accept='.jpg,.png,.jpeg'
            onChange={handleImage}
          />
        </div>
        <div className='newProduct__inputSection'>
          <label className='newProduct__inputLabel' htmlFor='price'>
            Price
          </label>
          <input
            type='number'
            className='newProduct__input'
            id='price'
            name='price'
            placeholder='Enter Product Price'
            value={price}
            onChange={handlePrice}
          />
        </div>
        <div className='newProduct__inputSection'>
          <label className='newProduct__inputLabel' htmlFor='name'>
            Description
          </label>
          <input
            type='text'
            className='newProduct__input'
            id='description'
            name='description'
            placeholder='Enter Product Details'
            value={description}
            onChange={handleDescription}
          />
        </div>
        <button onClick={addNewProduct}>Add</button>
      </form>
    </div>
  );
};

export default Form;
