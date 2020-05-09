const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const { client } = this.props;

        return (
        <Default>
                <div className="container">
                <div class="jumbotron">
                <a button type="button" className = "nav-link active" href="/crm"> BACK</a>
                                <p></p>
                                <h1 class="display-1"> {client.companyName} </h1>
                                <div class="show-page">
                                <h6> <small class="text-muted">Industry:</small> </h6>
                                <p class="lead"> {client.industry} </p>
                                <h6> <small class="text-muted">History:</small> </h6>
                                <h5> {client.description} </h5>
                                <hr class="my-4"></hr>
                                
                                <h2> <small class="text-muted">Client Information</small> </h2>
                                <h6> <small class="text-muted">Full Name:</small> </h6>
                                <p class="lead"> {client.name} </p>
                                <h6> <small class="text-muted">Email Address:</small> </h6>
                                <p class="lead">{client.email}</p>

                                <h6> <small class="text-muted">Status:</small> </h6>
                                <h4 class="small"> {client.contactClient ? `The client has been contacted` : `The client has not been contacted` }</h4>
                                <hr class="my-4"></hr>

                                <div class="order-#">
                                <a button type="button" className="btn btn-outline-info btn-x-lrg"href={`/crm/${client._id}/edit`}>EDIT</a>
                                <hr class="my-4"></hr>
                                <form className="form-group" action={`/crm/${client._id}?_method=DELETE`} method="POST">
                                            <input a button type="button" className="btn btn-outline-danger" type="submit" value="DELETE"/>
                                </form>
                                        </div>
                                    </div>
                                </div>
                            <div>          
                    </div>
                </div>
        </Default>
        )
    }
}

module.exports = Show;