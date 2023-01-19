import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

const App = (props: any) => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="product-container">
        {
          props.data.messages.map((product: any, index: string) => {
            return (
              <ProductCard key={index} productDetail={product} />
            )
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;
