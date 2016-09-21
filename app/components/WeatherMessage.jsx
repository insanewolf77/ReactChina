var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//       var {temp, location} = this.props;
//
//       return(
//       <h3>it is {temp} in {location} </h3>
//       )
//     }
// });


var WeatherMessage = ({temp,location}) => {
  return(
  <h3 className="text-center">Your name for {location} is {temp} </h3>
  )
};

module.exports = WeatherMessage;
