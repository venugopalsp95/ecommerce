# React E-Commerce Application

A scalable **E-Commerce web application built with React**, implementing product listing, product details, cart management, and order confirmation using modern frontend best practices.

---

## Live Demo & Repository

- **Live application:** https://venugopalsp95.github.io/ecommerce/

- **GitHub Repository:** https://github.com/venugopalsp95/ecommerce

---

## Screenshots

### Home page

[Home Page](./src/assets/screenshot)

### Product Details Page

[Product Details](./src/assets/screenshot/details.png)

### Cart & Checkout

[Cart Page](./src/assets/screenshot/cart.png)

---

## Features

- Product listing page
- Product search and filtering
- Category-based filtering
- Product details page using dynamic routing
- Add products to cart
- Increase and decrease item quantity
- Remove products from cart
- Cart total price calculation
- Order confirmation page
- Clean cart after successful order
- Global cart state using Context API
- Clean, modular, and scalable folder structure

---

## Tech Stack

- React
- React Router DOM
- Context API
- JavaScript (ES6+)
- CSS
- Dummy product data/ REST API

---

## Folder Structure

```text
src/
├── components/
│ ├── productcard/
│ │ ├──ProductCard.jsx
│ │ └──productcard.css
│ ├── cartitem/
│ │ ├── Cartitem.jsx
│ │ └── cartitem.css
│ ├── navbar/
│ │ ├── Navbar.jsx
│ │ └── navbar.css
├── context/
│ ├── CartContext.jsx
│ └── ProductContext.jsx
├── data/
│ └── categoryList.js
├── pages/
│ ├── cart/
│ │ ├──Cart.jsx
│ │ └──cart.css
│ ├── checkout/
│ │ ├── Checkout.jsx
│ │ └── checkout.css
│ ├── confirmation/
│ │ ├── Confirmation.jsx
│ │ └── confirmation.css
│ ├── home/
│ │ ├── Home.jsx
│ │ └── home.css
│ ├── productdetails/
│ │ ├── ProductDetails.jsx
│ │ └── productdetails.css
├── routes/
│ └── AppRoutes.jsx
├── styles/
│ └── index.css
├── App.jsx
└── main.jsx
```

---

## Application Flow

1. Products are displayed on the Home page
2. Clicking a product navigates to the product Details page
3. Users can add items to the cart
4. Cart allows:
   - Quantity increment and decrement
   - Item removal
5. Cart total updates automatically
6. On placing an order:
   - User is redirected to confirmation page
   - Cart state is cleared

---

## State Management

- Implemented **global cart state using React Context API**
- Centralized cart operations:
  - 'addToCart
  - 'increaseQuantity'
  - 'decreaseQuantity'
  - 'removeFromCart'
  - 'clean Cart'
- Prevented state mutation and ensured predictable updates

---

## Project Highlights

- Developed a fully functional e-commerce application using React
- Implemented global cart management using Context API
- Built dynamic routing for product listing and product detail pages
- Designed cart functionality with quantity control and total price calculation
- Followed clean, scalable, and maintainable frontend architecture

---

## Future Improvements

- Cart persistence using localStorage
- Checkout form and payment simulation
- Error Handling
- User authentication
- Performance optimization and pagination

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/venugopalsp95/ecommerce.git

npm install

npm run dev
```

---

## Author

**Venugopal S P**
React Frontend Developer

---
