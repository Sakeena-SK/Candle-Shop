const React = require('react')

function Edit (props) {
    const { name, _id, descreption, image } = props.category

    return(
        <layout>
        <div>
        
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>{name} Edit Page</h1>
            <a href='/category'>back to Category</a>
            <img src="/assets/WhatsApp Image 2025-06-21 at 22.06.14_23e3b0fa.jpg" alt="" />
            <form action={`/category/${_id}?_method=PUT&token=${props.token}`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                Descreption: <input type="text" name="descreption" defaultValue={descreption}/><br/>
                Image: <input type="text" name="image" defaultValue={image}/><br/>
                <input type="submit" value="Update Category" />
            </form>
        </div></layout>
    )
}

module.exports = Edit