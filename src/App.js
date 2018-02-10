import React, { Component } from 'react'
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  state = {
    location: null,
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
        location: null,
        error: errorMessage
      })
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }

  render() {
    const { location, error } = this.state
    return (
      <div className="App">
        <div className="container-fluid">
          <h1>React Geolocation</h1>
          <button className="btn btn-primary mt-3" onClick={this.handleGetLocation.bind(this)}>
            Get Location
          </button>
          <div className="mt-3">
          {!!location && !error ? (
            <div>
              <div>Latitude: {location.latitude}</div>
              <div>Longitude: {location.longitude}</div>
              <div>Accuracy: {location.accuracy}</div>
            </div>
          ) : <div>{error}</div>
          }
          </div>
        </div>
      </div>
    )
  }
}

export default App
