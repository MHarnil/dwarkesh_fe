import React from 'react';
import {Box} from '@mui/material';
import journeyImg from '../../assets/images/home/Group 226.png';

const Journey = () => {
    return (
        <Box
            component="img"
            src={journeyImg}
            alt="Journey"
            sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block'
            }}
        />
    );
};

export default Journey;
