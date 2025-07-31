#  Candle Shop🕯️

A simple and elegant e-commerce website for candle products. Customers can browse available candles and add their favorite items to a shopping cart. Admins can log in to manage the products (add, update, delete).

---

## 📌 Features

- JWT-based authentication (Sign up & Sign in)
- Admin-only product management
- Customers can add/remove products to/from cart
- Responsive, beautiful front-end
- MVC architecture (Models, Views, Controllers)
- RESTful API (Bonus)
- Unit testing on models
- Optional: Load testing, deployment

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- HTML / CSS (custom)
- Artillery (optional load testing)
- Trello for planning
- ISX

---
## 🕯️ Candle Routes

| Action  | Method | Path             | Description                                                |
|---------|--------|------------------|------------------------------------------------------------|
| index   | GET    | /products         | Read information about all candles                         |
| create  | POST   | /products         | Create a new candle (admin only)                           |
| show    | GET    | /products/:id     | Read information about the candle with the given ID        |
| update  | PUT    | /products/:id     | Replace the candle with all new content (admin only)       |
| update  | PATCH  | /products/:id     | Update parts of the candle (admin only)                    |
| destroy | DELETE | /products/:id     | Delete the candle with the given ID (admin only) 

---

## 🔐 Authentication Routes (For Customers)

| Action | Method | Path            | Description                           |
|--------|--------|------------------|---------------------------------------|
| signup | POST   | /auth/register   | Create a new customer account         |
| signin | POST   | /auth/login      | Log in an existing customer account   |

---

## 🛒 Cart Routes (For Authenticated Customers)

| Action  | Method | Path         | Description                               |
|---------|--------|--------------|-------------------------------------------|
| index   | GET    | /cart         | View all items in the current cart        |
| create  | POST   | /cart         | Add a product to the cart                 |
| destroy | DELETE | /cart/:id     | Remove a specific item from the cart      |