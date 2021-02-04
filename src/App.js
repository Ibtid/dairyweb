import './App.css';
import Navbar from './SharedComponents/UIComponent/Navbar/Navbar';
import ProductsPage from './User/Pages/Products/ProductsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreControl from './Admin/Pages/StoreControl/StoreControl';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin/store'>
          <StoreControl />
        </Route>
        <Route path='/'>
          <Navbar />
          <ProductsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
