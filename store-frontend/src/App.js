import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import Navigation from './components/navigation';
import Banner from './components/banner';
import ProductForm from './components/productForm';
import AllProducts from './components/allProducts';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  async componentDidMount(){
    let res = await fetch('http://localhost:4000/api/products')
    let products = await  res.json();
    
    this.setState({
      data: products
    });
  }

  render(){
    return (
      <div>
        <Navigation/>
        <Router>
          <Route exact path="/" render={() => {
            return (
              <div>
                <Banner/>
                <div className="row mt-2">
                  {this.state.data.map((product, i)=>(
                    <AllProducts product={product} key={i}/>
                  ))}
                </div>
              </div>
            )
          }}
          />      
        <Route exact path="/create" render={() => {
            return (
              <div className="container col-5">
                 <ProductForm/>
              </div>
            );
          }}
          />   
          <Route exact path="/products" render={() => {
            return <h1>product</h1>
          }}
          />    
        </Router>
      </div>  
    );
  }
}

export default App;
