import category from '../../models/category'

const React = require('react')

function Edit (props) {
    const { name, _id, descreption, image } = props.category
    return(
        <layout>
        <div>
        
            <a href='/layout'>Home</a><a href={`/category?token=${props.token}`}>Category</a><a href='/cart'>Cart</a><a href='/users'>Logout</a>
            <h1>{name} Edit Page</h1>
            <a href='/category'>back to Category</a>
            <form action={`/category/${_id}?_method=PUT&token=${props.token}`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/>
                Descreption: <input type="text" name="descreption" defaultValue={descreption}/><br/>
                Image: <input type="text" name="image" defaultValue={image}/><br/>
                {/* <input type="submit" value="Update Category" />
                 <label htmlFor="imageUrl" className="form-label">Or Image URL:</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            className="form-input"
            placeholder="Paste image URL here"
            defaultValue={
              category.image && !category.image.startsWith('uploads/')
                ? category.image
                : ''
            }
          />

          {category.image && (
            <div className="current-image">
              <p>Current Image:</p>
              <img
                src={category.image.startsWith('http') ? category.image : `/${category.image}`}
                alt={category.title}
                style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
              />
            </div>
          )} */}
            </form>
        </div></layout>
    )
        }   


module.exports = Edit