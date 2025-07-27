import {configureStore} from '@reduxjs/toolkit';
import carReducer from '../features/Cars/Car.js';

export default configureStore({
    reducer:{
        car: carReducer,
    }
})
