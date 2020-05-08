const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const { clients } = this.props;

        return (
            <Default>
            <header className="container-fluid">
                <h1>Client Directory</h1>
            </header>
                <nav className="container">
                    <a className="btn btn-outline-primary" href="/crm/new">Add a New Client</a>
                </nav>
                
                <main className="container">
                    <div className ="row">
                    {
                        clients.map((client, i) => {
                            // console.log(client)
                        
                            return (
                                <div className = "col-md-2" key={i}>
                                    <a className ="btn btn-outline-info btn-sm" href={`/crm/${client._id}/edit`}>EDIT</a>

                                <div className="item">
                                <form className="form-group form-delete" action={`/crm/${client._id}?_method=DELETE`} method="POST">
                                        <input className="btn-delete" type="submit" value="delete"/>
                                        </form>
                                    
                                    <div className="info-container">
                                        <a href={`/crm/${client._id}`}>
                                            <h4>Company: {client.companyName}</h4>
                                        </a>
                                    <p>Industry: {client.industry}</p>
                                    <p>Description: {client.description}</p>
                                    <p>{client.contactClient ? `The client has been contacted` : `The client has not been contacted`} </p>
                                    </div>
                                    
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </main>
        </Default>
        )
    }
}

module.exports = Index;