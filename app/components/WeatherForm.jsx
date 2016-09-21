var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
      //Prvents page from reloading
      e.preventDefault();

      var location = this.refs.location.value;
      var gender = this.refs.gender.value;


      if (location.length > 0 && gender.length > 0) {
        //Clearing the text box
        // this.refs.location.value = '';
        // this.refs.gender.value = '';
        //Send to the parent function
        this.props.onSearch(location, gender);
      }

    },


    render: function (){
      return(
        <div>
        <form onSubmit={this.onFormSubmit}>



            <select ref="location">
              <option>England</option>
              <option>France</option>
              <option>Germany</option>
              <option>United States</option>
            </select>


            <select ref="gender">
              <option>male</option>
              <option>female</option>
            </select>



          <button className="button success expanded">Get Name</button>
        </form>
        </div>
      );
    }
});


module.exports = WeatherForm;
