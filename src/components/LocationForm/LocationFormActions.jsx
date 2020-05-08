import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import { IconButton, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { cityMaxId, addCity } from 'store/ducks/city';
import { placeMaxId, addPlace, selectSelectedPlace } from 'store/ducks/place';

const useStyles = makeStyles(() => ({
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const LocationFormActions = ({ inputValue, formType }) => {
    const classes = useStyles();
    const nextIdCity = parseInt(useSelector(cityMaxId)) + 1;
    const nextIdPlace = parseInt(useSelector(placeMaxId)) + 1;
    const selectedPlaceId = useSelector(selectSelectedPlace).id;
    const dispatch = useDispatch();

    const dispatchFunction = () =>
        formType === 'Place'
            ? addPlace(nextIdPlace, inputValue)
            : addCity(nextIdCity, selectedPlaceId,  inputValue);

    return (
        <>
            <IconButton
                className={classes.iconButton}
                aria-label="search"
                name={inputValue}
            >
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="directions"
                name={inputValue}
                onClick={() => dispatch(dispatchFunction()) }
            >
                <AddCircleIcon />
            </IconButton>
        </>
    );
};

export default LocationFormActions;
