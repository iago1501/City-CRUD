import React from 'react';
import { useDispatch } from 'react-redux';

import { IconButton } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { removePlace, updatePlace } from 'store/ducks/place';
import { removeCity, removeCityByPlaceId, updateCity } from 'store/ducks/city';

const LocationActions = ({ id, formType, value }) => {
    const dispatch = useDispatch();
    console.log(value);
    return (
        <>
            <IconButton
                onClick={() =>
                    formType === 'Place'
                        ? dispatch(updatePlace(id, value))
                        : dispatch(removeCity(id))
                }
                aria-label="directions"
                size="small"
            >
                <UpdateIcon style={{ color: 'orange' }} />
            </IconButton>
            <IconButton
                onClick={() =>
                    formType === 'Place'
                        ? dispatch([removePlace(id), removeCityByPlaceId(id)])
                        : dispatch(removeCity(id))
                }
                color="secondary"
                aria-label="directions"
                size="small"
            >
                <DeleteIcon />
            </IconButton>
        </>
    );
};

export default LocationActions;