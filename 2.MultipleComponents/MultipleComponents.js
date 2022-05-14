class HotelBookingForm extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          nameValue: ' ',
          emailValue: ' ',
          nameofHotelValue: 'Fantastic Hotels',
          locationValue: 'California'
      };
  }

  handleNameChange = (event) => {
      this.setState({
          nameValue: event.target.value.toUpperCase()
      /*
          handleNameChange is the event handler here and all event handlers using
          the arrow notation so that we don't have to explicitly bind the "this"
          reference to these functions.
          It takes a single input argument, the event, and then invokes this.setState
          to update the nameValue.
          This event handler is where we can make changes to the input that the user
          has specified to get it in the right format.
          We want to ensure that all user names in uppercase, so we should set the state
          of nameValue to be event.target.value.toUpperCase()
          event.target gives us a reference to the input element of the form.
          The .value property of the input element allows us to access the value that
          the user has entered.
      */
      });
  }

  handleEmailChange = (event) => {
      this.setState({
          emailValue: event.target.value
      });
  }

  handleNameOfHotelChange = (event) => {
      this.setState({
          nameOfHotelValue: event.target.value
      });
  }

  handleLocationChange = (event) => {
      this.setState({
          locationValue: event.target.value
      });
  }

  handleSubmit = (event) => {
      alert("Are you sure you want to proceed with the booking?"+
          this.state.nameofHotelValue);

      console.log('Name submitted: '+this.state.nameValue);
      console.log('Email ID submitted: '+this.state.emailValue);
      console.log('Name Of Hotel submitted: '+this.state.nameofHotelValue);
      console.log('Location submitted: '+this.state.locationValue);

      this.setState({
          nameValue: ' ',
          emailValue: ' ',
          nameOfHotelValue: 'Fantastic Hotels',
          locationValue: 'California'
      });

      event.preventDefault();
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit} className = "contents">
              <div className = "label">
                  Name:
              </div>
              <textarea className = "input"
                      value = {this.state.nameValue}
                      onChange = {this.handleNameChange} />

              <div className = "label">
                  Email ID:
              </div>
              <input className = "input" type = "text"
                  value = {this.state.emailValue}
                  onChange = {this.handleEmailChange} />

              <div className = "label">
                  Name Of Hotel:
              </div>
              <select value = {this.state.nameofHotelValue}
                      onChange = {this.handleNameOfHotelChange}>
                  <option value = "Fantastic Hotels">Fantastic Hotels</option>
                  <option value = "Wonderful Hotels">Wonderful Hotels</option>
                  <option value = "Comfortable Hotels">Comfortable Hotels</option>
                  <option value = "Pretentious Hotels">Pretentious Hotels</option>
              </select>

              <div className = "label">
                  Location:
              </div>
              <input className = "input" type = "text"
                  value = {this.state.locationValue}
                  onChange = {this.handleLocationChange} />

              <input className = "button" type = "submit" value = "Submit" />
          </form>
      );
  }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('outer'));