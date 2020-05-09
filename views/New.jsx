const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"crossorigin="anonymous"/>
                </head>

            <div className="container">
            <hr class="my-4"></hr>
            <h2> <small class="text-muted">Add</small> </h2>
            <h2 class="display-3">Company Information</h2>
            <nav>
                    <a button type="button" className = "nav-link active" href="/crm"> BACK</a>
            </nav>
                <div className="row">
                    <div className="col-md-5 my-auto">
                    <img className="img-fluid" src="https://media.giphy.com/media/3ohhwlgaHwZ9zQ9HZS/giphy.gif" alt="Stock HourGlass Image"/>
                </div>

            <div className="col-md-7 my-auto">
                
                <form className="form-group" action="/crm" method="POST">
                    <fieldset class="account-info">
                    <legend>COMPANY INFORMATION</legend>

                    <i class="fas fa-building"><label for ="companyName">Company Name:</label></i> 
                        <input className="form-control" type="text" name="companyName" placeholder="Enter Company Name"/><br/>
                    <i class="fas fa-archive"></i><label for ="industry">Industry:</label>
                        <input className="form-control" type="text" name="industry" placeholder="Enter the Industry"/><br/>
                    <i class="fas fa-history"></i><label for ="description">History: </label>
                        <textarea className="form-control" type="textarea" name="description" placeholder="Enter Company Information"/><br/>

                    <legend>CLIENT INFORMATION</legend>

                    <i className="fas fa-address-book"></i><label for ="name">Full Name:</label>
                        <input className="form-control" type="text" name="name" placeholder="Enter Full Name"/><br/>
                    <i class="fas fa-envelope"></i><label for ="email">Email Address:</label>
                        <input className="form-control" type="email" name="email" placeholder="Enter Valid Email Address"/><br/>
                    <i class="fas fa-address-card"></i><label for="contactClient"> Has the client been contacted:</label>
                        <input className="form-control" type="checkbox" name="contactClient" /><br/>
                    </fieldset>

                    <input className="btn btn-primary btn-lg active" type="submit" name="" value="Add Client"/>
                </form>

                    </div>
                </div>
            </div>
            </Default>
        );
    }
}

module.exports = New;