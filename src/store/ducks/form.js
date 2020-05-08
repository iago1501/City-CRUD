export const selectSearchedPlace = (state) => state.form.SearchedPlace;
export const selectSearchedCity = (state) => state.form.SearchedCity;

// Action Types

export const Types = {
    CHANGE_PLACE: 'form/CHANGE_PLACE',
    CHANGE_CITY: 'form/CHANGE_CITY',
};

// Reducer

const INITIAL_STATE = {
    SearchedPlace: '',
    SearchedCity: '',
};

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.CHANGE_PLACE:
            return {
                ...state,
                SearchedPlace: action.payload,
            };
        case Types.CHANGE_CITY:
            return {
                ...state,
                SearchedCity: action.payload,
            };
        default:
            return state;
    }
};

// Action Creators

export const changePlace = (name) => ({
    type: Types.CHANGE_PLACE,
    payload: name,
});

export const changeCity = (name) => ({
    type: Types.CHANGE_CITY,
    payload: name,
});

export default formReducer;
