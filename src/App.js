import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Profutt from './Component/Profutt';
import Practica from './Component/Practica';
import Product from './Component/Product';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Switch>
           
               {/** <Route exact path='/'  component={} />*/} 
              
             
               <Route exact path='/'  component={Login} />
               <Route exact path='/Profutt'  component={Profutt} />
               <Route exact path='/Product'  component={Product} />
               
                
              
        </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
