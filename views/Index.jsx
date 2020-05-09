const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const { clients } = this.props;

        return (
            <Default title="Client Relations Manager" route="index">
            <header className="container-fluid">
                <h1 class="display-1">Customer Relationship Management</h1>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" 
            crossorigin="anonymous"
            />
            </header>
                <nav className="clearfix">
                    <a className="btn btn-outline-primary" href="/crm/new">Add a New Client</a>
                </nav>
                
                <main className="container-fluid">
                <div class="row justify-content-md-center">
                                {/* <div class="row col-lg-3">
                                Keep Working
                                <img className="img-fluid" src="https://media.giphy.com/media/nOBv4FaG7o1Hy/giphy.gif" alt="Stock Image"/>
                                </div> */}

                        <table class="table table-hover table-dark">
                            <tr>
                                <th className="table-active">
                                    <i class="fas fa-building"></i> Company Name
                                </th>
                                <th className="table-active">
                                    <i class="fas fa-archive"></i> Industry
                                </th>
                                <th className="table-active">
                                    <i className="fas fa-address-book"></i>Client Name
                                </th>
                                <th className="table-active">
                                    <i class="fas fa-envelope"></i> E-mail
                                </th>
                                <th className="table-active">
                                    <i class="fas fa-address-card"></i> Outreach
                                </th>
                                <th className="table-primary">
                                    <i class="fas fa-edit"></i> Edit
                                </th>
                                <th className="table-danger">
                                    <i class="fas fa-user-slash"></i> Delete
                                </th>
                                </tr>
                                <tr>
                                    {
                                        clients.map((client, i) => {
                                        return (
                                <tr>
                                    <td> <a href={`/crm/${client._id}`}>{client.companyName}</a> </td>
                                    <td>{client.industry}</td>
                                    <td>{client.name}</td>
                                    <td>{client.email}</td>
                                    <td>{client.contactClient ? `The client has been contacted` : `Contact the client!`}</td>
                                    <td>
                                        <a className="table__btn-edit btn btn-outline-info" href={`/crm/${client._id}/edit`}>
                                            <i class="fas fa-edit"></i></a>
                                        </td>
                                        <td>
                                            <form className="table__form-delete" action={`/crm/${client._id}?_method=DELETE`} method="POST">
                                                <button className="btn btn-delete btn-outline-danger" type="submit">
                                                    <i className="fas fa-user-slash"></i>
                                                </button>
                                                </form>
                                            </td>
                                            </tr>
                                            );
                                        })}
                                    </tr>
                            </table>
                    </div>
            </main>
        </Default>
        )
    }
}

module.exports = Index;


