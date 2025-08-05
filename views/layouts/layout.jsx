const React = require('react')

function Layout(props){
 return(
    <html>
        <head>
            <title>{!props.category?.name ? 'Categories App - The Greatest Of All Time' : `${props.category.name} - Categories App`}</title>
            <link rel="stylesheet" href="/styles.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
           {/* //nav bar goes here */}
            <div className="container">
                {props.children}
            </div>
        </body>
    </html>
 )
}

module.exports = Layout