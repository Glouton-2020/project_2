const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                 {/* <!-- ============= CONTAINER ============== --> */}
            <div className="container">
                <h1>Add Company Information</h1>

                <ul class="nav justify-content-end">
                    <a className="btn btn-primary" href="/crm">Back</a>
                </ul>

                <div className="row">
                    <div className="col-md-5 my-auto">
                    <img className="img-fluid" src="https://media.giphy.com/media/xTiTnvMImfPiGyNamI/giphy.gif" alt="Stock Image"/>
                </div>

            <div className="col-md-7 my-auto">
                
                
                <form className="form-group" action="/crm" method="POST">
                    <fieldset class="account-info">
                    <legend>COMPANY INFORMATION</legend>

                    <label for ="companyName">Company Name:</label>
                        <input className="form-control" type="text" name="companyName" placeholder="Enter Company Name"/><br/>
                    <label for ="industry">Industry:</label>
                        <input className="form-control" type="text" name="industry" placeholder="Enter the Industry"/><br/>
                    <label for ="description">Description: </label>
                        <textarea className="form-control" type="textarea" name="description" placeholder="Enter Company Information"/><br/>

                    <legend>CLIENT INFORMATION</legend>

                    <label for ="name">Full Name:</label>
                        <input className="form-control" type="text" name="name" placeholder="Enter Full Name"/><br/>
                    <label for ="email">Email Address:</label>
                        <input className="form-control" type="email" name="email" placeholder="Enter Valid Email Address"/><br/>
                    <label for="contactClient"> Has the client been contacted:</label>
                        <input className="form-control" type="checkbox" name="contactClient" /><br/>
                    </fieldset>

                    <input className="btn btn-primary" type="submit" name="" value="Add Client"/>
                </form>

                    </div>
                </div>
            </div>
            </Default>
        );
    }
}

module.exports = New;