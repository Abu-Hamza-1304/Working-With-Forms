/*
    In React, forms are special because forms typically hold some internal state of their own.
    Forms are what we use to input data on a web page. This data is a part of the forms internal
    data, and this data is what is submitted to the server when we click on the Submit button of
    a form.
    Contolled Components: These are React components that contain form elements, such as input,
    textarea, and select.
*/
class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: ' '
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e) {
        this.setState(
            {emailValue: e.target.value}
        );
    }

    handleSubmit(e) {
        console.log('Email address submitted: '+this.state.emailValue);

        alert('Here is the email address you submitted!'+this.state.emailValue)

        this.setState(
            {emailValue: ""}
        );

        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div className = "label">
                    Email address:
                </div>
                <input className = "input" type = "text"
                        value = {this.state.emailValue}
                        onChange = {this.handleEmailChange} />
                <input className = "button" type = "submit" value = "Submit" />
            </form>
        );
    }
};

ReactDOM.render(<EmailForm />, document.getElementById('outer'));