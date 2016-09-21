var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({

    getInitialState: function() {
      return {
        isLoading: false
      }
    },


    handleSearch: function (location, gender) {

      var that = this;

      this.setState({
        isLoading: true,
        errorMessage: undefined
      });

      openWeatherMap.getTemp(location, gender).then (function(temp) {
        that.setState({
            location: location,
            temp: temp,
            gender: gender,
            isLoading: false,

        });
      }, function (e){
          that.setState({
            isLoading: false,
            errorMessage: e.message
          });

      });



    },



    render: function () {
      var {isLoading, temp, location, gender, errorMessage} = this.state;

      function renderMessage () {
        if (isLoading) {
          return <h3 className="text-center">Fetching Name ... </h3>;
        } else if (temp && location) {
           return <WeatherMessage temp={temp} location={location} gender={gender}/>;
        }
      }


      function renderError () {
        if (typeof errorMessage === 'string') {
          return (
            <ErrorModal/>
          )
        }
      }



      return(
        <div>
          <h1 className="text-center page-title">Name Finder</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
        </div>
      )
    }


});


module.exports = Weather;
