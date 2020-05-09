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
                    <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css"></link>
                    <link href="https://fonts.googleapis.com/css?family=Monofett&display=swap" rel="stylesheet"></link>
                </head>
                <body>
                    {this.props.children}
                    <footer>
                        <div className="container-fluid">
                            <p>Built by Benjamin Glouton in 2020</p>
                            <a id='linkedin' href="https://www.linkedin.com/in/benjamin-glouton/" target='_blank'>Connect with me on LinkedIn</a>
                        </div>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default; 