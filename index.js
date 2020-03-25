import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    photos: PhotosListReducer,
    uploadedPhotos: UploadedPhotosReducer,
});

const store = createStore(rootReducer);
const {cloud_name, upload_preset} = config;

render(
    <Provider store={store}>
        <App cloudName={cloud_name} uploadPreset={upload_preset}/>
    </Provider>,
    document.getElementById('root')
);