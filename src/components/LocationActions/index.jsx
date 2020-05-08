import React from 'react';
import { useDispatch } from 'react-redux';

import { IconButton, Tooltip } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { removePlace, updatePlace } from 'store/ducks/place';
import { removeCity, removeCityByPlaceId, updateCity } from 'store/ducks/city';

const LocationActions = ({ id, formType, value }) => {
    const dispatch = useDispatch();
    return (
        <>
            <Tooltip title="Update">
                <IconButton
                    onClick={() =>
                        formType === 'Place'
                            ? dispatch(updatePlace(id, value))
                            : dispatch(updateCity(id, value))
                    }
                    aria-label="directions"
                    size="small"
                >
                    <UpdateIcon style={{ color: 'orange' }} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton
                    onClick={() =>
                        formType === 'Place'
                            ? dispatch([
                                  removePlace(id),
                                  removeCityByPlaceId(id),
                              ])
                            : dispatch(removeCity(id))
                    }
                    color="secondary"
                    aria-label="directions"
                    size="small"
                >
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </>
    );
};

export default LocationActions;
