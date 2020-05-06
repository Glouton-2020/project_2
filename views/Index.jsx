const React = require('react');

class Index extends React.Component {
    render() {
        const { clients } = this.props;
        return (
            <div className="container">
                <h1>Client Directory</h1>
                <nav>
                    <a href="/crm/new">Add Client Info</a>
                </nav>
                <ul>
                    {
                        clients.map((client, i) => {
                            // console.log(log._id)
                            return (
                                <li>
                                    The <a href={`/crm/${client._id}`}>{client.companyName}</a> is 
                                    <a href={`/crm/${client._id}`}>{client.industry}</a> 
                                    {client.clientName}{client.description}
                                    {client.contactClient ? `The client been contacted` : `The client has not be contacted`}
                                    {client.futureSales}{client.notes}
                                    <form action={`/crm/${client._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                        </form>
                                        <a href={`/crm/${client._id}/edit`}>Edit</a>
                                        <form action={`/crm/${client._id}/edit`}>
                                        <input type="submit" value="edit"/>
                                    </form>

                                        
                                    {/* <div> Industry A </div>
                                    <div> Industry B </div>
                                    <div> Industry C </div>
                                    <div> Contact Number: </div>
                                    <div> Reached Out: </div>
                                    <div> Project Sales: </div> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;