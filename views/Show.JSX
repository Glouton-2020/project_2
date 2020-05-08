const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const { client } = this.props;

        return (
        <Default>
                <div className="flex-box">
                <p></p>
                <a className = "btn btn-primary" href="/crm"> BACK</a>
                <p></p>
                            <h1> {client.companyName} </h1>
                                <nav>
                                </nav>

                                <div>
                                <h4> Industry: {client.industry} </h4>
                                <h4> Description: {client.description} </h4>
                                <h4> Contact Client: {client.contactClient ? `The client has been contacted` : `The client has not been contacted` }</h4>

                                <form className="form-group" action={`/crm/${client._id}?_method=DELETE`} method="POST">
                                            <input className="btn btn-outline-danger btn-sm" type="submit" value="DELETE"/>
                                </form>
                                        <a className="btn btn-outline-info btn-sm"href={`/crm/${client._id}/edit`}>EDIT</a>
                                </div>
                            <div>          
                    </div>
                </div>
        </Default>
        )
    }
}

module.exports = Show;