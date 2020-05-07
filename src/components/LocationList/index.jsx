import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem, ListItemText } from '@material-ui/core';

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
}));

const Places = ({ location, changePlace, selected }) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.paper}>
            <List
                component="nav"
                className={classes.list}
                aria-label="location"
            >
                {location &&
                    location.map(({ id, name }) => (
                        <ListItem button selected={selected === id}>
                            <ListItemText
                                key={id}
                                inset
                                primary={name}
                                onClick={() => changePlace(id, name)}
                            />
                        </ListItem>
                    ))}
            </List>
        </Paper>
    );
};

export default Places;
