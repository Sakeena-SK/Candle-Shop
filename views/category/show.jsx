const React = require('react')

const styles = {
    backgroundColor: 'skyblue',
}
function Show(props){
    return(
        <div style={styles}>
            <h1>{props.category.name}</h1>
            <a href={`/category/?token=${props.token}`}>Go back to Index Page</a>
            <img src={`${props.category.image}`} alt={props.category.name} />
            <p>
                The {props.category.name} is {props.category.Descreption}
            </p>
              <form action={`/category/${props.category._id}?_method=DELETE&token=${props.token}`} method="POST">
                <input type="submit" value={`Delete this ${props.category.name}`}/>
            </form>
            <div>
            <a href={`/category/${props.category._id}/edit?token=${props.token}`}><button>{`Edit this ${props.category.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show