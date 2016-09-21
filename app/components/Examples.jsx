var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//     render: function () {
//       return(
//       <h3>Examples component </h3>
//       )
//     }
// });

var Examples = (props) => {
    return(
      <div>
      <h1 className="text-center">Examples </h1>
      <p>Boy going to Germany to study: Adolf </p>
      <p>Student(Boy) going to Russia to study: Vladmir</p>
      <p>Other Names</p>
      <ol>
        <li><Link to='/?region=Germany'>German Names</Link></li>
        <li><Link to='/?region=USA'>American Names</Link></li>
      </ol>
      </div>
    )
};

module.exports = Examples;
