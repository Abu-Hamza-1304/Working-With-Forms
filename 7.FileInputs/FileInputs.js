/*
    Any time we specify an input of type equal to file, we have to remember
    that this is an uncontrolled component. That's because its value can only
    be set by a user, it cannot be set programmatically.
*/
class FileInput extends React.Component {
    constructor(props) {
        super(props);

        this.fileInputRef = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();

        var filename = this.fileInputRef.current.files[0].name;

        alert(`Are you sure you want to upload - ${filename} file ?`);

        console.log('File uploaded: ', filename);
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit} className = "contents">
                <label>
                    Select file to upload: <br/><br/>
                    <input type="file" ref={this.fileInputRef} />
                </label>
                <br/>
                <button className = "button" type = "submit">
                    Upload
                </button>
            </form>
        );
    }
}

ReactDOM.render(<FileInput />, document.getElementById('react-form-file-uncontrolled'));