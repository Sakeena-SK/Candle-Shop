const React = require('react')
const Layout = require('../layouts/layout')

function Home(props) {

    const categories = props.categories
    let selectedCategories = []

    function randomCategory() {
        const shuffled = categories.sort(() => 0.5 - Math.random())
        const selected = shuffled.slice(0, 3)
        selectedCategories = [...selected]
    }

    randomCategory()

    const products = props.products
    let selectedProducts = []

    function randomProducts() {
        const shuffled = products.sort(() => 0.5 - Math.random())
        const selected = shuffled.slice(0, 8)
        selectedProducts = [...selected]
    }

    randomProducts()

    return (
        <Layout>
            <div>
                <nav class="navbar">
                    <nav class="productBar">
                        <a class="nav-link" href={`/?token=${props.token}`}>Home</a><a class="nav-link" href={`/category?token=${props.token}`}>Category</a><a class="nav-link" href='/cart'>Cart</a>
                    </nav>
                    <nav className='productBar'>
                        <a class="logoutLink" href='/users'>Logout</a>
                    </nav>
                </nav>
                <h1 class="homeHead">Home</h1>

                <>
                    <div className="box-container">
                        {
                            selectedCategories.map((category) => {
                                return (
                       <li className="box-2-cat">
                            <img src={`${category.image}?token=${props.token}`} className="category-image" alt={category.name} />
                            <div className="category-content">
                                <a href={`/category/${category.id}?token=${props.token}`} className="category-name">
                                {category.name}
                                </a>
                                <p className="category-description">{category.descreption}</p>
                            </div>
                        </li>
                                )
                            })
                        }
                    </div>

                    <div className="box-container">
                        {
                            selectedProducts.map((product) => {
                                return (
                                    <li className="product-box" key={product.id}>
                                        <img src={`${product.image}?token=${props.token}`} className="product-image" alt={product.name} />
                                        <div className="product-content">
                                            <a href={`/product/${product.id}?token=${props.token}`} className="product-name">
                                                {product.name}
                                            </a>
                                            <p className="product-description">{product.descreption}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </div>
                </>

            </div>
        </Layout>
    )
}

module.exports = Home