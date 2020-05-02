const React = require('react');

class Index extends React.Component {
    render() {
        const { clients } = this.props;
        return (
            <div>
                <h1>Client Directory</h1>
                <nav>
                    <a href="/crm/new">Add Client Info</a>
                </nav>
                <div container> 
                    {
                        clients.map((client, i) => {
                            return (
                                    <div> Industry A </div>
                                    <div> Industry B </div>
                                    <div> Industry C </div>
                                    <div> Contact Number: </div>
                                    <div> Reached Out: </div>
                                    <div> Project Sales: </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

module.exports = Index;