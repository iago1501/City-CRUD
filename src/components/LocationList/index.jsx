import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    List,
    ListItem,
    ListItemText,
    TextField,
} from '@material-ui/core';

import LocationActions from '../LocationActions';

const useStyles = makeStyles((theme) => ({
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    input: {
        width: '90%',
        marginLeft: '10%',
    },
}));

const LocationList = ({ location, changeLocale, selected, formType }) => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState();

    return (
        <Paper elevation={3} className={classes.paper}>
            <List
                component="nav"
                className={classes.list}
                aria-label="location"
            >
                {location &&
                    location.map(({ id, name }) => (
                        <ListItem button key={id} selected={selected === id}>
                            {selected !== id ? (
                                <ListItemText
                                    inset
                                    primary={name}
                                    onClick={() => {changeLocale(id, name); setInputValue(name)}}
                                />
                            ) : (
                                <TextField
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    defaultValue={name}
                                    className={classes.input}
                                    id="standard-basic"
                                />
                            )}
                            {selected === id && (
                                <LocationActions
                                    formType={formType}
                                    id={id}
                                    value={inputValue}
                                />
                            )}
                        </ListItem>
                    ))}
            </List>
        </Paper>
    );
};

export default LocationList;
