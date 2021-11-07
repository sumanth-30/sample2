import {Component} from 'react'
import {FaStar, FaRupeeSign} from 'react-icons/fa'
import {HiOutlineMinusSm} from 'react-icons/hi'
import {BsPlus} from 'react-icons/bs'
import './index.css'

class FoodItems extends Component {
  state = {isClicked: false, activeCount: 1, itemId: ''}

  handleClick = () => {
    const oldItem = JSON.parse(localStorage.getItem('cartData')) || []
    const {isClicked, activeCount} = this.state
    const {foodItems} = this.props
    Object.assign(foodItems, {activeCount})
    // console.log(foodItems)
    this.setState({isClicked: !isClicked, itemId: foodItems.id})
    oldItem.push(foodItems)
    localStorage.setItem('cartData', JSON.stringify(oldItem))
  }

  clickMinus = () => {
    const {activeCount, isClicked} = this.state

    // console.log(foodItems.id)
    if (activeCount > 1) {
      this.setState(prevState => ({
        activeCount: prevState.activeCount - 1,
      }))
    } else if (activeCount <= 1) {
      this.setState({activeCount: 1, isClicked: !isClicked})
    }
    // console.log(activeCount)
  }

  clickPlus = () => {
    // console.log(data)

    this.setState(prevState => ({
      activeCount: prevState.activeCount + 1,
    }))
  }

  render() {
    // eslint-disable-next-line
    const {foodItems, key} = this.props
    const {isClicked, activeCount, itemId} = this.state
    console.log(itemId)

    return (
      <>
        <div testid="foodItem" className="each-food-item-container">
          <div className="each-item-image">
            <img
              src={foodItems.imageUrl}
              alt={`img${foodItems.id}`}
              className="item-image"
            />
          </div>
          <div className="each-item-details-container">
            <h1 className="item-name">{foodItems.name}</h1>
            <div className="cost-container">
              <FaRupeeSign className="each-item-rupees-icon" />
              <p className="item-cost">{foodItems.cost}</p>
            </div>
            <div className="rating-container">
              <FaStar className="each-item-star-icon" />
              <p className="item-rating">{foodItems.rating}</p>
            </div>
            {isClicked ? (
              <div className="each-item-counter-container" id={foodItems.id}>
                <div testid="decrement-count" className="minus-icon-container">
                  <HiOutlineMinusSm
                    className="minus-icon"
                    onClick={this.clickMinus}
                  />
                </div>
                <p testid="active-count" className="count-value">
                  {activeCount}
                </p>
                <div testid="increment-count" className="plus-icon-container">
                  <BsPlus className="plus-icon" onClick={this.clickPlus} />
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="add-item-button"
                onClick={this.handleClick}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default FoodItems
