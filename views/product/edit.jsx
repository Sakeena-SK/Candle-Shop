const React = require('react')

function Edit (props) {
    const { name, _id, price, image } = props.product
    if ( User.role === 'owner') {
    return(
        <layout>
        <div>
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>{name} Edit Product</h1>
            <a href='/product'>Back ot Product page</a>
            <img src="/assets/WhatsApp Image 2025-06-21 at 22.06.14_23e3b0fa.jpg" alt="" />
            <form action={`/product/${_id}?_method=PUT&token=${props.token}`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                Price: <input type="text" name="price" defaultValue={price}/><br/>
                Image: <input type="text" name="image" defaultValue={image}/><br/>
                <input type="submit" value="Update product" />
            </form>
        </div></layout>
    )
    } else {
        return //index
    }
}

module.exports = Edit