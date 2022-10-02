import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function BusinessPage(props) {

    return (
        <div>
            <div class="mb-3 row">
                <label for="Name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="Name" />
                </div>
            </div>

            <div class="mb-3 row">
                <label for="Address" class="col-sm-2 col-form-label">Address</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="Address" />
                </div>
            </div>

            <LoadScript
                googleMapsApiKey="AIzaSyDhiqjj758GvLLzrNln3S7czxw3knahnwE"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default React.memo(BusinessPage);