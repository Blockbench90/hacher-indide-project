import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class SimpleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 46.7826921,
            lng: 34.1845863
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '150px', width: '400px'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyAePPkduP4lmCqm25IyuHhORloqoLq_uMQ"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={47.7826921}
                        lng={35.1845863}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}


export default SimpleMap;