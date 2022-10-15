import React from 'react';
import {Card, CardContent, CardMedia, Grid} from "@mui/material";

const GoodsItem = (props) => {
    const { name, price, setOrder, poster} = props;

    return (
        <Grid item md={4}>
            <Card>
                <CardMedia
                    component="img"
                    image={poster}
                    alt={name}
                    title={name}
                    sx={{ height: 140}}
                />
                <CardContent>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Price: {price} $</p>
                    <button
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Buy
                    </button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export {GoodsItem};
