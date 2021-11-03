import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const CartEmpty = () => (
  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625831743/cart-no-order_qivsro.png"
        alt="empty cart"
        className="empty-cart-img"
      />
      <h1 className="empty-cart-heading">No Order Yet!</h1>
      <p className="empty-cart-description">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/" style={{textDecoration: 'none'}}>
        <button type="button" className="home-btn">
          Order Now
        </button>
      </Link>
    </div>
  </>
)

export default CartEmpty
