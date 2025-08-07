const React = require('react')

function Layout(props){
 return(
    <>
        <head>
            <title>{!props.category?.name ? 'Categories App - The Greatest Of All Time' : `${props.category.name} - Categories App`}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="/styles.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
        </head>
        <body>
           {/* //nav bar goes here */}
            <div className="container">
                {props.children}
            </div>
        </body>
        </>
 )
}

module.exports = Layout