import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { selectCities, selectSelectedPlace } from 'store/ducks/city';
import LocationList from '../LocationList/index';
import LocationForm from '../LocationForm/index';

const Cities = () => {
    // const [input, setInput] = useState('');

    // const handleChange = (e) => {
    //     const { value } = e.target;
    //     setInput(value);
    // };
    const selectedPlace = useSelector(selectSelectedPlace);
    const cities = useSelector((state) =>
        selectCities(state, selectedPlace.id)
    );

    return (
        <Grid item xs={6}>
            {cities && (
                <>
                    <LocationForm />
                    <LocationList
                        location={cities}
                        selected={selectedPlace.id}
                    />
                </>
            )}
        </Grid>
    );
};

export default Cities;
