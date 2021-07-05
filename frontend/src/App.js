import Header from './components/Header';
import AddFoodOrder from './components/AddFoodOrder';
import allFoodOrders from './components/FoodOrdersList';
import AddBeverageOrder from './components/AddBeverageOrder';
import allBevOrders from './components/BeverageOrdersList';
import EditBeverageOrder from './components/EditBeverageOrder';
import EditFoodOrder from './components/EditFoodOrder';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import FoodOList_Pdf from './components/FoodOList_Pdf';
import BevOList_Pdf from './components/BevOList_pdf';
import FoodOrderDetails from './components/FoodOrderDetails';
import BevOrderDetails from './components/BevOrderDetails';
import "./css/form.css";
import "./css/receipt.css";

function App(){
  return( 
    <Router>
    <div>
      <Header/> 
      <Route path="/addBevOrder" exact component={AddBeverageOrder}/>
      <Route path="/addFoodOrder"  exact component={AddFoodOrder}/>
      <Route path="/listFoodOrder" exact component={allFoodOrders}/>
      <Route path="/listBeverageOrder" exact component={allBevOrders}/>
      <Route path="/updateFood/:id" exact component={EditFoodOrder}/>
      <Route path="/updateBev/:id" exact component={EditBeverageOrder}/>
      <Route path="/pdfGenerate" exact component={FoodOList_Pdf}/>
      <Route path="/pdfGenerateBev" exact component={BevOList_Pdf}/>
      <Route path="/food/:id" exact component={FoodOrderDetails}/>
      <Route path="/bev/:id" exact component={BevOrderDetails}/>
    </div>
    </Router>
    
  );
}

export default App;