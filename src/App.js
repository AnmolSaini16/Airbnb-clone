import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Switch>

          {/* /search */}
          <Route path='/search'>
            <SearchPage />
          </Route>

          {/* / */}
          <Route path='/'>
            <Home />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
