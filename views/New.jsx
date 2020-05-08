const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
        return (
            <Default>
            <div className="container">
                <h1>Add Company Information</h1>
                <nav>
                    <a className="btn btn-primary" href="/crm">Back</a>
                </nav>

                <div className="row">
                    <div className="col-md-5 my-auto">
                    <img className="img-fluid" src="https://media.giphy.com/media/xTiTnvMImfPiGyNamI/giphy.gif" alt="Stock Image"/>
                </div>

            <div className="col-md-7 my-auto">
                <form className="form-group" action="/crm" method="POST">

                    Company Name: <input className="form-control" type="text" name="companyName" /><br/>
                    Industry: <input className="form-control" type="text" name="industry" /><br/>
                    Description: <textarea className="form-control" type="text" name="description" /><br/>
                    Has the client been contacted: <input className="form-control" type="checkbox" name="contactClient" /><br/>

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