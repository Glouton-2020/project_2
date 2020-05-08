const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { client } = this.props;

        return (
            <Default>
            <div className="container">
                <h1>Edit {client.companyName}</h1>

                <nav>
                    <a className = "btn btn-primary" href="/crm"> BACK </a>
                </nav>

                <form className="form-group" action={`/crm/${client._id}?_method=PUT`} method="POST">
                    Company: <input className="form-control" type="text" name="companyName" defaultValue={client.companyName}/> <br/>
                    Industry: <input className="form-control" type="text" name="industry" defaultValue={client.industry}/> <br/>
                    Description: <textarea className="form-control" type="text" name="description" defaultValue={client.description}/> <br/>
                    Have you contacted the Company? 
                    <input className="form-control" type="checkbox" name="contactClient" defaultChecked={client.contactClient}/> <br/>

                    <input className="btn btn-primary" type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = Edit;