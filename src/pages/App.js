import React from 'react';
import { Container } from '@material-ui/core/';

import CitiesAndPlacesContainer from '../components/CitiesAndPlacesContainer/index';

export const App = () => {
    return (
        <Container fixed>
            <CitiesAndPlacesContainer />
        </Container>
    );
};

export default App;
