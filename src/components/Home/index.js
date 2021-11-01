import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import AllRestaurant from '../AllRestaurant'
import Header from '../Header'
import FooterSection from '../FooterSection'
import Offers from '../Offers'

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
      <FooterSection />
    </>
  )
}

export default Home
