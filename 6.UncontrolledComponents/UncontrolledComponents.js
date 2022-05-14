/*
    Uncontolled Components: These are where the form elements manage their own data.
    i.e., form data is handled by the DOM itself, we don't need to write an event
    handler for every state changes or every input update that the user makes.
    We will simply accept the user input directly from the form element that has
    the actual value which means we need to be able to access the HTML elements
    directly.
*/
class HotelBookingForm extends React.Component {
    
    constructor(props){
        super(props);

        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.nameOfHotelRef = React.createRef();
    }

    handleSubmit = (event) => {
        alert("Are you sure you want to proceed with the booking? "+
            this.nameOfHotelRef.current.value);

        console.log('Name submitted: '+this.nameRef.current.value.toUpperCase());
        console.log('Email Id submitted: '+this.emailRef.current.value);
        console.log('Name Of Hotel submitted: '+this.nameOfHotelRef.current.value);
        
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit} className = "contents">
                <div className = "label">
                    Name:
                </div>
                <input className = "input" ref = {this.nameRef} />
                <div className = "label">
                    Email Id:
                </div>
                <input className = "input" type = "text" ref = {this.emailRef} />
                <div className = "label">
                    Name Of Hotel: 
                </div>
                <select ref = {this.nameOfHotelRef} defaultValue = "Comfortable Hotels">
                    <option value = "Fantastic Hotels">Fantastic Hotels</option>
                    <option value = "Wonderful Hotels">Wonderful Hotels</option>
                    <option value = "Comfortable Hotels">Comfortable Hotels</option>
                    <option value = "Pretentious Hotels">Pretentious Hotels</option>
                </select>
                <input className = "button" type = "submit" value = "Submit" />
            </form>
        );
    }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('outer'));