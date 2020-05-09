const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { client } = this.props;

        return (
            <Default>
                <head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" 
            crossorigin="anonymous"/>
                </head>
                <hr class="my-4"></hr>
            <div className="container">
            <nav>
                <a button type="button" className = "nav-link active" href="/crm"> BACK</a>
            </nav>
                <h2> <small class="text-muted">Edit</small> </h2>
                <h2 class="display-1">{client.companyName}</h2>

                <form className="form-group" action={`/crm/${client._id}?_method=PUT`} method="POST">
                <fieldset class="account-info">

                    <legend>COMPANY INFORMATION</legend>
                    <i class="fas fa-building"></i><label for ="companyName">Company Name:</label>
                        <input className="form-control" type="text" name="companyName" defaultValue={client.companyName}/><br/>
                    <i class="fas fa-archive"></i><label for ="industry">Industry:</label>
                        <input className="form-control" type="text" name="industry" defaultValue={client.industry}/><br/>
                    <i class="fas fa-history"></i><label for ="description">History: </label>
                        <textarea className="form-control" type="textarea" name="description" defaultValue={client.description}/><br/>

                    <legend>CLIENT INFORMATION</legend>
                    <i className="fas fa-address-book"></i><label for ="name">Full Name:</label>
                        <input className="form-control" type="text" name="name" name="name" defaultValue={client.name}/><br/>
                    <i class="fas fa-envelope"></i><label for ="email">Email Address:</label>
                        <input className="form-control" type="email" name="email" defaultValue={client.email}/><br/>
                    <i class="fas fa-address-card"></i><label for="contactClient"> Has the client been contacted:</label>
                        <input className="form-control" type="checkbox" name="contactClient" defaultChecked={client.contactClient}/><br/>
                    </fieldset>

                    <input className="btn btn-primary btn-lg active"  type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = Edit;