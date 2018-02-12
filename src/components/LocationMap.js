import React from 'react'

const LocationMap = ({ location }) => (
  <iframe
    title="LocationMap"
    width="600"
    height="450"
    frameBorder="0"
    style={{ border: '0' }}
    src={
      'https://www.google.com/maps/embed/v1/place?key=' +
      process.env.REACT_APP_GOOGLE_API_KEY +
      '&q=' +
      location.latitude +
      ',' +
      location.longitude +
      '&zoom=16'
    }
    allowFullScreen
  />
)

export default LocationMap
