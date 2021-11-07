import {Link, withRouter} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const NotFoundRoute = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dihboy1cn/image/upload/v1634883847/not_found.jpg"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="page-not-found-heading">Page Not Found</h1>
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

export default withRouter(NotFoundRoute)
