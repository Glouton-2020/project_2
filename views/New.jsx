const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>Add Client Information</h1>
              <form action="/crm" method="POST">
                  Company Name: <input type="text" name="companyName" /><br/>
                  Industry: <input type="text" name="industry" /><br/>
                  Client Name: <input type="text" name="clientName" /><br/>
                  Description: <input type="text" name="description" /><br/>
                  Has the client been contacted: <input type="checkbox" name="contactClient" /><br/>
                  Forecasted Sales: <input type="text" name="futureSales" /><br/>
                  Notes: <input type="text" name="notes" /><br/>
                  <input type="submit" name="" value="Add Client"/>
              </form>
          </div>
          );
    }
  }
  
  module.exports = New;
