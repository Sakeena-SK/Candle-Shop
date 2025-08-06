const React = require('react')
const Layout = require('../layouts/layout')

function Home (props) {
    
    const category = props.category
    let selectedCategory = []

function randomCategory() {
    const shuffled = category.sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 3)
    selectedCategory = [...selected]
}

randomCategory()

    const products = props.products
    let selectedProducts = []

function randomProducts() {
    const shuffled = products.sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 8)
    selectedProducts = [...selected]
}

randomProduct()

    return(
        <Layout>
        <div>
            <nav class="navbar">
                <div class="categoryProduct">
                    <nav class="productBar">
                        <a class="nav-link" href='/'>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a><a class="logoutLink" href='/users'>Logout</a>
                    </nav>  
                </div>
            </nav>
            <h1>Home</h1>
                        <ul>
                {            
                    
                   categories.map((category) => {
                    return (
                        <>
                            <li><img src={`${category.image}?token=${props.token}`} style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}/></li>
                            <li><a href={`/category/${category.id}?token=${props.token}`}>{category.name}</a> <br/> {category.descreption}</li>
                            </>
                    )
                   }) 
                }
                {
                    
                   selectedProducts.map((product) => {
                    return (
                    <>
                        <li><img src={`${product.image}?token=${props.token}`} style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}/></li>
                        <li><a href={`/product/${product.id}?token=${props.token}`}>{product.name}</a> <br/> {product.descreption}</li>
                    </>
                    )
                   }) 
                }
            </ul>
            </div>
        </Layout>
    )
}

module.exports = Home