import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className='App'>
          <Header />
          <main className='py-3'>
            <Container>
              <Route path='/' exact component={HomeScreen} />
              <Route path='/product/:id' component={ProductScreen} />
              <Route path='/cart/:id?' component={CartScreen} />
            </Container>
          </main>
          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
