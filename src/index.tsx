import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './Post';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />      
        <Route path="/post/:post_url" component={Post} />        
      </Switch>
    </Router>
  , document.getElementById('root')
);
