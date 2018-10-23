import React, { Component } from 'react';

//Googlemap is aleady wired up in index.html so we dont have to import anything as such.
export class GoogleMap extends Component {
  //this lifecycle method gets called automatically by React after this component has been rendered on the screen.
  componentDidMount() {
    //this is how we create an embedded google map inside of our document.
    //the first arguement tells where this google map will get embedded into i.e this.refs.map div.
    //The 2nd arguement is an options object.
    new google.maps.Map(this.refs.map, {
      zoom: 12, //zoom level
      center: {// tell goggle maps where we wnt to center he map by 
        //specifying lat and lng.
        lat: this.props.lat,//the lat and lon properties come as props from the weather API.
        lng: this.props.lon//the google api has the name lng whereas the weather api has the name as lon hence the difference in names.
      }
    });
  }

  render() {
    return (
      //can refer to this div anywhere in the component using this.refs.map
      <div ref="map"></div>
    )
  }
}

export default GoogleMap;
