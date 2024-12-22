import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    this.setState(prevState => ({
      speed: prevState.speed + 10 <= 200 ? prevState.speed + 10 : 200,
    }))
  }

  onApplyBrake = () => {
    this.setState(prevState => ({
      speed: prevState.speed - 10 >= 0 ? prevState.speed - 10 : 0,
    }))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="para">Speed is {speed}mph</h1>
        <p className="desc">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-box">
          <button className="button1" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button2" type="button" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
