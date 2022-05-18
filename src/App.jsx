//Importing all necessary files needed
import { useContext } from 'react';
import { 
  BrowserRouter as Router, 
  Redirect, 
  Route, 
  Switch 
} from 'react-router-dom';
import { CartPage, Checkout, Dashboard, ItemDetail, Landing, PaymentPortal, Register, Shop, SignIn, UploadPage, WishListPage } from "./pages";
import Invoice from './pages/Invoice';
import {CartContext} from './contexts/CartContext'
import { AuthContext } from './contexts/AuthContext';
import useAuth from './hooks/useAuth';


/**
 * * First component mounted whenever the web app loads
 */

function App() {

    const {cartItems} = useContext(CartContext)   //State which manages the shop cart
    const {user: authUser} = useContext(AuthContext)  //State which manages shop owner
    
    useAuth() //Checks local storage every time to see if a shop owner is logged in

    //If a shop owner is logged in
    if(authUser) return (
      //show shop owner page
      <div className="App">
        <Router>
          <Switch>
              <Route exact path="/" component={UploadPage} />
              <Route exact render={()=><Redirect to={"/"} />} />
          </Switch>
        </Router>
      </div>
    )
  
    //else show shop
    return (
      <div className="App">
            <Router>
              <Switch>
                  <Route path="/" exact component={Landing} />
                  <Route path="/cart" exact  component={CartPage} />
                  <Route path="/wishlist" exact  component={WishListPage} />
                  <Route path="/store" exact  component={Shop} />
                  <Route path="/payment-portal" exact  component={PaymentPortal} />
                  <Route path="/item-details" exact  component={ItemDetail} />
                  <Route exact path={"/dashboard"} component={Dashboard} />
                  <Route exact path={"/sign-in"} component={SignIn} />
                  <Route exact path={"/register"} component={Register} />
                  <Route exact path={"/upload"} component={UploadPage} />
                  
                  <Route 
                    path="/checkout"
                    exact 
                    render={
                      ()=>cartItems.length > 0 ? <Checkout /> : <Redirect to={"/"}/>
                    }
                  />
                  <Route 
                    path="/invoice"
                    exact 
                    render={
                      ()=>cartItems.length > 0 ? <Invoice /> : <Redirect to={"/"}/>
                    }
                  />
                  <Route exact render={()=><Redirect to={"/"} />} />
                  

                  
              </Switch>
              
            </Router>
      </div>
    );
}

export default App;
