// Selectors
import { createSelector } from 'reselect';

export const selectPlaces = (state) => state.place.places;
export const selectSelectedPlace = (state) => state.place.selectedPlace;

export const placeMaxId = createSelector(
    [selectPlaces],
    (places) => places.map((place) => place.id).sort((a, b) => b - a)[0]
);

// Action Types

export const Types = {
    ADD_PLACE: 'places/ADD_PLACE',
    CHANGE_PLACE: 'places/CHANGE_PLACE',
    REMOVE_PLACE: 'places/REMOVE_PLACE',
    UPDATE_PLACE: 'update/UPDATE_PLACE',
};

// Reducer

const INITIAL_STATE = {
    selectedPlace: '',
    places: [
        {
            id: 1,
            name: 'Rio de Janeiro',
        },
        {
            id: 2,
            name: 'São Paulo',
        },
    ],
};

const placeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.ADD_PLACE:
            return {
                ...state,
                places: [...state.places, { ...action.payload }],
            };
        case Types.REMOVE_PLACE:
            return {
                ...state,
                selectedPlace: '',
                places: state.places.filter(
                    (place) => place.id !== action.payload
                ),
            };
        case Types.UPDATE_PLACE:
            return {
                ...state,
                selectedPlace: '',
                places: state.places.map((place) =>
                    place.id === action.payload.id
                        ? { ...action.payload }
                        : place
                ),
            };
        case Types.CHANGE_PLACE:
            return {
                ...state,
                selectedPlace: action.payload,
            };
        default:
            return state;
    }
};

// Action Creators

export const addPlace = (id, name) => ({
    type: Types.ADD_PLACE,
    payload: { id, name },
});

export const changePlace = (id, name) => ({
    type: Types.CHANGE_PLACE,
    payload: { id, name },
});

export const updatePlace = (id, name) => ({
    type: Types.UPDATE_PLACE,
    payload: { id, name },
});

export const removePlace = (id) => ({
    type: Types.REMOVE_PLACE,
    payload: id,
});

export default placeReducer;
