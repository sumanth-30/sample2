import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const NotFoundRoute = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625830262/NotFound_kpncbm.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="page-not-found-heading">PAGE NOT FOUND</h1>
      <p className="page-not-found-description">
        we are sorry, the page you requested could not be found
      </p>
      <Link to="/">
        <button type="button" className="home-btn">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFoundRoute
