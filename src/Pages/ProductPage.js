import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../Components/Menu';


const HomePage = () => {
  const products = useSelector(state => state.products.products);

  return (
    <div className='home-page md:grid grid-cols-3 flex flex-wrap bg-white py-20 md:px-14'>
      {products.map(product => (
        <Menu key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default HomePage;