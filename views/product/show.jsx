const React = require('react')

const styles = {
    backgroundColor: 'skyblue',
}
function Show(props){
    return(
        <div style={styles}>
            <a href='/layout'>Home</a><a href='/category'>Category</a><a href='/cart'>Cart</a><a href='/signUp'>Login/SignUp</a>
            <h1>{props.product.name}</h1>
            <a href={`/category/?token=${props.token}`}>Go back to Index Page</a>
            <a href={`/product/?token=${props.token}`}>Products Page</a>
            <img src={`${props.product.image}`} alt={props.product.name} />
            <p>
                The {props.product.name} is {props.product.Descreption}
            </p>
              <form action={`/product/${props.product._id}?_method=DELETE&token=${props.token}`} method="POST">
                <input type="submit" value={`Delete this ${props.product.name}`}/>
            </form>
            <div>
            <a href={`/product/${props.product._id}/edit?token=${props.token}`}><button>{`Edit this ${props.product.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show