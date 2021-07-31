import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
    <Router>
      <Switch>      
        <Route path="/post/:post_url" component={Post} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  , document.getElementById('root')
);
