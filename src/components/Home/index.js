import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import Offers from '../Offers'
import AllRestaurant from '../AllRestaurant'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <Offers />
      <div className="main">
        <AllRestaurant />
      </div>
      <Footer />
    </>
  )
}

export default Home
