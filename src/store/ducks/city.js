// Selectors
import { createSelector } from 'reselect';

export const selectPlaces = (state) => state.city.places;
export const selectSelectedPlace = (state) => state.city.selectedPlace;

export const selectCities = createSelector(
    [selectPlaces, (_, placeId) => placeId],
    (places, placeId) =>
        places.find((place) => place.id === placeId)
            ? places.find((place) => place.id === placeId)?.cities
            : null
);

// export const selectMaxId = createSelector([selectPlaces], (places) => {});

// Action Types

export const Types = {
    ADD_CITY: 'city/ADD_CITY',
    REMOVE_CITY: 'city/REMOVE_CITY',
    UPDATE_CITY: 'city/UPDATE_CITY',
    CHANGE_PLACE: 'city/CHANGE_PLACE',
};

// Reducer

const INITIAL_STATE = {
    selectedCity: {},
    selectedPlace: {},
    places: [
        {
            id: 1,
            name: 'Rio de Janeiro',
            cities: [
                {
                    id: 2,
                    name: 'Rio de Janeiro',
                },
                {
                    id: 3,
                    name: 'Niterói',
                },
                {
                    id: 4,
                    name: 'Nilópolis',
                },
            ],
        },
        {
            id: 5,
            name: 'São Paulo',
            cities: [
                {
                    id: 6,
                    name: 'São Paulo',
                },
                {
                    id: 7,
                    name: 'Ribeirao Preto',
                },
                {
                    id: 8,
                    name: 'Higienópolis',
                },
            ],
        },
    ],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.TYPE:
            return { ...state };
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

export const addCity = (value) => ({
    type: Types.ADD_CITY,
    payload: { value },
});

export const changePlace = (id, name) => ({
    type: Types.CHANGE_PLACE,
    payload: { id, name },
});

export default reducer;
