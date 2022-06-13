import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import  {agregarComic}  from '../../redux/teamduck';

export default function Cards({ api }) {
    const dispatch = useDispatch();
    const { Meta } = Card;
    const agreg=( idImagen )=>{
        dispatch(agregarComic(idImagen));
    }
    return (
        
        <div>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={`${api.thumbnail.path}.${api.thumbnail.extension}`} />}
            >
                <Meta title={api.title} />
                <Meta title={
                    <Button type="primary" onClick={()=>{agreg(api.id)}}>
                        Agregar 
                    </Button>
                     
                } />
            </Card>
           
        </div>
    )
}
