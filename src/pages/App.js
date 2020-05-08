import React from 'react';
import { Container } from '@material-ui/core/';

import CitiesAndPlacesContainer from '../components/CitiesAndPlacesContainer';
import GeoChart from '../components/GeoChart';

export const App = () => {
    return (
        <Container fixed>
            <CitiesAndPlacesContainer />
            <GeoChart />
        </Container>
    );
};

export default App;
