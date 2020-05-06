const React = require('react');

class Show extends React.Component {
    render() {
        const { companyName, industry, clientName, description, contactClient, futureSales, notes } = this.props.log;

        return (
            <div className="flex-box">
                <h1> Client Summary </h1>
                <nav>
                    <a href="/crm">Back</a>
                </nav>
                <div>
                <h2> Company: {companyName} </h2>
                <h4> Industry: {industry} </h4>
                <h2> Client Name: {clientName} </h2>
                <h4> Description: {description} </h4>
                <h4> Contact Client: { contactClient ? `The client been contacted` : `The client has not be contacted` }</h4>
                <h2> Future Sales: {futureSales} </h2>
                <h4> Notes: {notes} </h4>               
                </div>
                </div>
        )
    }
}

module.exports = Show;