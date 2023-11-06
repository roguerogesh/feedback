import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  render() {
    const {eachList} = this.props
    const {name, imageUrl} = eachList

    return (
      <div className="bg-container">
        <div className="small-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>

          <li>
            <img src={imageUrl} alt={name} className="image" />
            <p>{name}</p>
          </li>
        </div>
      </div>
    )
  }
}

export default Feedback
