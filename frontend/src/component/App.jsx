import React from 'react'
import { BrowserRouter,Route} from "react-router-dom";
import ProductScreen from '../Screens/ProductScreen';
import HomeScreen from '../Screens/HomeScreen';

function App() {
  
  return( 
    <BrowserRouter>
  <div className="grid-container">
  <header className="row">
      <div className="brand">
          <a href="/">amazona</a>
      </div>
      <div>
          <a href="/cart">Cart</a>
          <a href="/sigin">Sign In </a>
      </div>
  </header>
  <main>
  
  <Route path="/product/:id" component={ProductScreen} ></Route>
  <Route path="/" component={HomeScreen} exact></Route>
  
  </main>
  
  <footer className="row center">All right reserved</footer>
</div>
</BrowserRouter>
  )
}

export default App;
