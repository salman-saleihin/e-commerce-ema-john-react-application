import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div>

    <Header></Header>

      <Router>
        <Switch>
          <Route path='/shop'>
               <Shop></Shop>
          </Route>
          <Route path='/review'>
                <Review></Review>
          </Route>
          <Route path='/inventory'>
               <Inventory></Inventory>
          </Route>
          <Route exact path='/'>
                <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
                <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>


      {/* <Routes>
        < Route path='/' element={<Home />} />
        < Route path='/review' element={<Review />} />
        < Route path='/inventory' element={<Inventory/>} />
        < Route path='/' element={<Shop />} />
      </Routes> */}
      
     
    </div>
  );
}

export default App;
