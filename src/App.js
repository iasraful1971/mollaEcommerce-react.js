import React from 'react';
import Footer from './componenets/Footer/Footer';
import Headerarea from './componenets/Headerarea/Header';
import Shop from './componenets/Shop/Shop';

const App = () => {
  return (
    <div className="App">
        <Headerarea></Headerarea>
        <Shop></Shop>
        <Footer></Footer>
        
    </div>
  );
};

export default App;