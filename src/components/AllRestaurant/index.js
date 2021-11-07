import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {FaStar, FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import RestaurantsHeader from '../RestaurantsHeader'

import './index.css'

const sortByOptions = [
  {
    optionId: 'low',
    displayText: 'Lowest',
  },
  {
    optionId: 'high',
    displayText: 'Highest',
  },
]

class AllRestaurant extends Component {
  state = {
    restaurantsList: [],
    activePage: 1,
    limit: 9,
    activeOptionId: sortByOptions[0].optionId,
    isLoading: false,
  }

  componentDidMount() {
    this.getRestaurantsList()
  }

  getRestaurantsList = async () => {
    const {activePage, limit, activeOptionId} = this.state

    this.setState({isLoading: true})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${
      (activePage - 1) * limit
    }&limit=${limit}&sort_by_rating=${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      // console.log(fetchedData)
      const updatedData = fetchedData.restaurants.map(restaurant => ({
        imageUrl: restaurant.image_url,
        id: restaurant.id,
        name: restaurant.name,
        userRating: restaurant.user_rating,
        rating: restaurant.user_rating.rating,
        ratingText: restaurant.user_rating.rating_text,
      }))
      this.setState({
        restaurantsList: updatedData,
        isLoading: false,
      })
    }
  }

  onClickRightPage = () => {
    const {activePage} = this.state
    if (activePage > 0 && activePage < 4) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.getRestaurantsList,
      )
    } else if (activePage > 4) {
      this.setState({activePage: 4}, this.getRestaurantsList)
    }
  }

  onClickLeftPage = () => {
    const {activePage} = this.state
    if (activePage > 1 && activePage < 5) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getRestaurantsList,
      )
    } else if (activePage < 1) {
      this.setState({activePage: 1}, this.getRestaurantsList)
    }
  }

  updateActiveOptionId = activeOptionId => {
    this.setState({activeOptionId}, this.getRestaurantsList)
  }

  renderRestaurantsList = () => {
    const {activePage, restaurantsList, activeOptionId} = this.state
    // console.log(restaurantsList)
    return (
      <>
        <RestaurantsHeader
          sortByOptions={sortByOptions}
          activeOptionId={activeOptionId}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <div
          testid="restaurant-item"
          className="Restaurants-container"
          key={restaurantsList.id}
        >
          <div className="Restaurants-items-container">
            {restaurantsList.map(item => (
              <Link
                to={`/restaurant/${item.id}`}
                style={{textDecoration: 'none'}}
                key={item.id}
              >
                <div className="Restaurant-item-container">
                  <div className="restaurant-img-container">
                    <img
                      src={item.imageUrl}
                      alt={`item${item.id}`}
                      className="restaurant-img"
                    />
                  </div>
                  <div className="restaurant-details-container">
                    <h1 className="restaurant-name">{item.name}</h1>
                    <p className="restaurant-food-type">Fast Food</p>
                    <div className="restaurant-rating-container">
                      <FaStar className="star-icon" />
                      <p className="rating-value">{item.userRating.rating}</p>
                      <p className="total-ratings-value">
                        ({item.userRating.total_reviews})
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="pagination-container">
            <FaChevronLeft
              testid="pagination-left-button"
              className="page-left-icon"
              onClick={this.onClickLeftPage}
            />
            <p testid="active-page-number" className="page-count-numbers">
              <span>{activePage}</span> to <span>4</span>
            </p>
            <FaChevronRight
              testid="pagination-right-button"
              className="page-right-icon"
              onClick={this.onClickRightPage}
            />
          </div>
        </div>
      </>
    )
  }

  renderLoader = () => (
    <div testid="restaurants-list-loader" className="loader">
      <Loader type="Circles" color="#F7931E" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoader() : this.renderRestaurantsList()}</>
  }
}

export default AllRestaurant
