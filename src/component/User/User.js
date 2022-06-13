import React from 'react';
import { Typography, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CardsId from '../Cards/CardsId';

export default function User() {

    const comic = useSelector(store => store.user.comic)
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();
    const { Title,Paragraph } = Typography;
    console.log(user.name);

    return (
        <div>
            <Row>
                <Col span={24}>
                    <Title level={1} align={'center'}>Mis Comics</Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Paragraph>{`Hola ${user.name} ${user.surname} eston son tus comics favoritos`}</Paragraph>
                </Col>
            </Row>

            <Row>

                {comic.map(id => {
                return <CardsId id={id}/>
                })}

            </Row>
        </div>
    )
}
