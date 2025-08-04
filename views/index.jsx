import React, { useEffect, useState } from 'react'
import './index.css'
import logo from '../assets/logo.png'  // لو شعارك في مجلد assets

export default function Home() {
   const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const catRes = await fetch('/api/categories')
        const catData = await catRes.json()
        const randomCategories = catData.sort(() => 0.5 - Math.random()).slice(0, 3)
        setCategories(randomCategories)

        const prodRes = await fetch('/api/products')
        const prodData = await prodRes.json()
        const randomProducts = prodData.sort(() => 0.5 - Math.random()).slice(0, 9)
        setProducts(randomProducts)
      } catch (err) {
        console.error('Failed to fetch data:', err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="home-container">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Category</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/login">Login/SignUp</a></li>
        </ul>
      </nav>

      <section className="categories-section">
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          {categories.map(cat => (
            <div key={cat._id} className="category-card">
              <img src={cat.imageUrl} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section">
        <h2>Products</h2>
        <div className="products-grid">
          {products.map(prod => (
            <div key={prod._id} className="product-card">
              <img src={prod.imageUrl} alt={prod.name} />
              <h3>{prod.name}</h3>
              <p>{prod.price} BHD</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
