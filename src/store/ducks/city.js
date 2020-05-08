// Selectors
import { createSelector } from 'reselect';

export const selectCities = (state) => state.city.cities;

export const selectSelectedCity = (state) => state.city.selectedCity;

export const selectedCitiesByPlace = createSelector(
    [selectCities, (_, placeId) => placeId],
    (cities, placeId) => cities.filter((city) => city.placeId === placeId)
);

export const cityMaxId = createSelector(
    [selectCities],
    (cities) => cities.map((city) => city.id).sort((a, b) => b - a)[0]
);

// Action Types

export const Types = {
    ADD_CITY: 'city/ADD_CITY',
    REMOVE_CITY: 'city/REMOVE_CITY',
    REMOVE_CITY_BY_PLACE_ID: 'city/REMOVE_CITY_BY_PLACE_ID',
    UPDATE_CITY: 'city/UPDATE_CITY',
    CHANGE_CITY: 'city/CHANGE_CITY',
};

// Reducer

const INITIAL_STATE = {
    selectedCity: '',
    cities: [
        {
            id: 2,
            placeId: 1,
            name: 'Rio de Janeiro',
        },
        {
            id: 3,
            placeId: 1,
            name: 'Niterói',
        },
        {
            id: 4,
            placeId: 1,
            name: 'Nilópolis',
        },
        {
            id: 6,
            placeId: 2,
            name: 'São Paulo',
        },
        {
            id: 7,
            placeId: 2,
            name: 'Ribeirao Preto',
        },
    ],
};

const cityReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.ADD_CITY:
            return {
                ...state,
                cities:
                    state.cities.find(
                        (city) => (city.name === action.payload.name && city.placeId === action.payload.placeId )
                    )
                        ? [...state.cities]
                        : [...state.cities, { ...action.payload }],
            };
        case Types.REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter(
                    (city) => city.id !== action.payload
                ),
            };
        case Types.CHANGE_CITY:
            return {
                ...state,
                selectedCity: action.payload,
            };
        case Types.UPDATE_CITY:
            return {
                ...state,
                selectedCity: '',
                cities: state.cities.map((city) =>
                    city.id === action.payload.id ? { placeId: city.placeId, ...action.payload } : city
                ),
            };
        case Types.REMOVE_CITY_BY_PLACE_ID:
            return {
                ...state,
                cities: state.cities.filter(
                    (city) => city.placeId !== action.payload
                ),
            };
        default:
            return state;
    }
};

// Action Creators

export const addCity = (id, placeId, name) => ({
    type: Types.ADD_CITY,
    payload: { id, placeId, name },
});

export const removeCity = (id) => ({
    type: Types.REMOVE_CITY,
    payload: id,
});

export const updateCity = (id, name) => ({
    type: Types.UPDATE_CITY,
    payload: { id, name },
});

export const changeCity = (id, name) => ({
    type: Types.CHANGE_CITY,
    payload: { id, name },
});

export const removeCityByPlaceId = (placeId) => ({
    type: Types.REMOVE_CITY_BY_PLACE_ID,
    payload: placeId,
});

export default cityReducer;
