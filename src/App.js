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
              <div><strong>Latitude:</strong> {location.latitude}</div>
              <div><strong>Longitude:</strong> {location.longitude}</div>
              <div><strong>Accuracy:</strong> {location.accuracy}</div>
              <div className="mt-3">
                <iframe
                  title="locationMap"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{border: '0'}}
                  src={"https://www.google.com/maps/embed/v1/place?key="+process.env.REACT_APP_GOOGLE_API_KEY+"&q="+location.latitude+","+location.longitude+"&zoom=16"} allowFullScreen>
                </iframe>
              </div>
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
