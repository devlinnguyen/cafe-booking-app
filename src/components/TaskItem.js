import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function TaskItem() {

    const useStyles = makeStyles((theme) => ({
        card: {
            marginBottom: '20px',
        },
    }));
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography color="textSecondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
                <Button color="primary">Task Item</Button>
            </CardContent>
        </Card>
    );
}
