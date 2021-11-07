import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const Restaurant = props => {
  const onChangeSortby = event => {
    const {updateActiveOptionId} = props
    updateActiveOptionId(event.target.value)
  }

  const {sortByOptions, activeOptionId} = props
  return (
    <>
      <div className="main-container">
        <h1 className="main-head">Popular Restaurants</h1>
        <div className="paragraph-container">
          <p className="paragraph-two-main">
            Select Your favourite restaurent special dish and make your day
            happy..
          </p>
          <div className="name-and-filter">
            <BsFilterRight />
            <p className="small-para">Sort By</p>
            <select
              className="sort-by-select"
              value={activeOptionId}
              onChange={onChangeSortby}
            >
              {sortByOptions.map(eachOption => (
                <option
                  key={eachOption.optionId}
                  value={eachOption.displayText}
                  className="select-option"
                >
                  {eachOption.displayText}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Restaurant
