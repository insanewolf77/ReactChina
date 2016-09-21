var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Payment Gateway</h4>
        <p>Ok, I paid</p>
        <p>
          <button className="button hollow" data-close="">Continue</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
