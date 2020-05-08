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

                <fieldset class="account-info">

                    <legend>COMPANY INFORMATION</legend>
                    <label for ="companyName">Company Name:</label>
                        <input className="form-control" type="text" name="companyName" defaultValue={client.companyName}/><br/>
                    <label for ="industry">Industry:</label>
                        <input className="form-control" type="text" name="industry" defaultValue={client.industry}/><br/>
                    <label for ="description">Description: </label>
                        <textarea className="form-control" type="textarea" name="description" defaultValue={client.description}/><br/>

                    <legend>CLIENT INFORMATION</legend>
                    <label for ="name">Full Name:</label>
                        <input className="form-control" type="text" name="name" name="name" defaultValue={client.name}/><br/>
                    <label for ="email">Email Address:</label>
                        <input className="form-control" type="email" name="email" defaultValue={client.email}/><br/>
                    <label for="contactClient"> Has the client been contacted:</label>
                        <input className="form-control" type="checkbox" name="contactClient" defaultChecked={client.contactClient}/><br/>
                    </fieldset>

                    <input className="btn btn-primary" type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = Edit;