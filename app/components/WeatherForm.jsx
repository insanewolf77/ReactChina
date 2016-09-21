var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
      //Prvents page from reloading
      e.preventDefault();

      var location = this.refs.location.value;
      if (location.length > 0) {
        //Clearing the text box
        this.refs.location.value = '';
        //Send to the parent function
        this.props.onSearch(location);
      }

    },


    render: function (){
      return(
        <div>
        <form onSubmit={this.onFormSubmit}>


          <label>Select Menu
            <select ref="location">
              <option>England</option>
              <option>France</option>
              <option>Germany</option>
              <option>United States</option>
            </select>
          </label>


          <button className="button success expanded">Get Name</button>
        </form>
        </div>
      );
    }
});


module.exports = WeatherForm;
