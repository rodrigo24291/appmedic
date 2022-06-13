import React, { useEffect, useState } from 'react'
import {get} from '../../Services/publicApiServices'
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { borrarComic } from '../../redux/teamduck';

export default function CardsId({id}) {

const dispatch = useDispatch();
const { Meta } = Card;
const GET_MARVEL_API_ID=`https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=83480ab3630dd22809c95eb93f93f563&hash=2469d3d8b7b5593dc92044f0fbe27be6`;    
const [api, setapi] = useState([]);
useEffect(() => {
    get(GET_MARVEL_API_ID).then(co => setapi(co.data.data.data.results))

},[id])
const borrar = (id)=>{
  dispatch(borrarComic(id));

}
  return (
    <div> {api.length == 1 && 
      <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={`${api[0].thumbnail.path}.${api[0].thumbnail.extension}`} />}
            >

          
<Meta title={api[0].title} />
                <Meta title={
                    <Button type="primary" onClick={()=>{borrar(api[0].id)}}>
                        Borrar 
                    </Button>
                     
                } />
            </Card>}
    </div>
  )
}
