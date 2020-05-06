const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, companyName, industry, clientName, description, contactClient, futureSales, notes} = this.props.clients;
        return (
            <div>
                <h1>Edit Company</h1>
                {/* url - /fruits/id_of_fruit? parameter to indicate the request */}
                <form action={`/crm/${_id}?_method=PUT`} method="POST">
                    Company: <input type="text" name="companyName" defaultValue={companyName}/> <br/>
                    Industry: <input type="text" name="industry" defaultValue={industry}/> <br/>
                    Client Name: <input type="text" name="clientName" defaultValue={clientName}/> <br/>
                    Description: <input type="text" name="description" defaultValue={description}/> <br/>
                    Contacted Client?: 
                    <input type="checkbox" name="contactClient" checked={contactClient}/> <br/>
                    Sales Projection: <input type="text" name="futureSales" defaultValue={futureSales}/> <br/>
                    Notes: <input type="text" name="notes" defaultValue={notes}/> <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;