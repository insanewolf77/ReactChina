var React = require('react');
var {Link, IndexLink} = require('react-router');


// var Nav = React.createClass({
//   render: function (){
//     return(
//       <div>
//       <h2>Nav component</h2>
//       <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//       <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//       <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });



var Nav = () => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">My English Name</li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li><input type="search" placeholder="Search"/></li>
          <li><button type="button" className="button">Search</button></li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
