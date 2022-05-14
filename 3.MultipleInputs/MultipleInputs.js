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

    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        if (name == 'nameValue') {
            value = value.toUpperCase();
        }

        this.setState({
            [name]: value
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
           <div>
               Hello world
           </div>
        );
    }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('outer'));