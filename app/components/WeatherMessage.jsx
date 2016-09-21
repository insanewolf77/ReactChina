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


var WeatherMessage = ({temp,location,gender}) => {
  return(
  <h3 className="text-center">Your {gender} name in {location} is {temp} </h3>
  )
};

module.exports = WeatherMessage;
