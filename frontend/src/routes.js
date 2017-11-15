import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

 const appRouters = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/categories" component={Categories}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  	<p> Presenting you a platform to help the React-ives to discuss, debate and understand React </p>
  </div>
)

const Categories = ({ match }) => (
  <div>
    <h2>Categories</h2>
    <ul>
      <li>
        <Link to={`${match.url}/react`}>
          React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/redux`}>
          Redux
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/udacity`}>
          Udacity
        </Link>
      </li>
    </ul>
  
  	<Route path={`${match.url}/:categoryId`} component={Categories}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a category.</h3>
    )}/>
      </div>
	)

	const Category = ({ match }) => (
  	<div>
    	<h3>{match.params.categoryId}</h3>
 	 </div>
	)

export default appRouters
