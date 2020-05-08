const React = require ('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head> 
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="stylesheet" href="/main.css"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                    <title>Benjamin Glouton - Project 2: Client Relationship Management </title>
                </head>
                <body>
                    {this.props.children}
                    <footer>
                        <div className="container">
                            <p>Built by Benjamin Glouton 2020</p>
                        </div>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default; 