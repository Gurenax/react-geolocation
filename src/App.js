import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    location: {
      longitude: null,
      latitude: null,
      accuracy: null
    },
    error: null
  }

  handleGetLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    const success = pos => {
      const coords = pos.coords

      this.setState({
        location: {
          latitude: coords.latitude,
          longitude: coords.longitude,
          accuracy: `More or less ${coords.accuracy} meters.`
        },
        error: null
      })
    }

    const error = err => {
      const errorMessage = `ERROR(${err.code}): ${err.message}`

      this.setState({
        location: {
          latitude: null,
          longitude: null,
          accuracy: null
        },
        error: errorMessage
      })
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
    
  }

  render() {
    const { location, error } = this.state
    return (
      <div className="App">
        <h1>React Geolocation</h1>
        <button onClick={this.handleGetLocation.bind(this)}>Get Location</button>
        {!!location && (
          <div>
            <div>Latitude: {location.latitude}</div>
            <div>Longitude: {location.longitude}</div>
            <div>Accuracy: {location.accuracy}</div>
          </div>
        )}
      </div>
    )
  }
}

export default App
