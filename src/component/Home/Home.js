import React, { useEffect, useState } from 'react';
import { Typography, Row, Col } from 'antd';
import Cards from '../Cards/Cards';
import { get } from '../../Services/publicApiServices';
import {GET_MARVEL_API} from '../../Utilities/urlApi'

export default function Home() {

    const [api, setapi] = useState([]);
    const { Title } = Typography;
    
    useEffect(() => {
        get(GET_MARVEL_API).then(co => setapi(co.data.data.data.results))
    }, [])


    return (
        <div>
            <Row>
                <Col span={24}>
                    <Title level={2} align={'center'}>Marvel App</Title>
                </Col>
            </Row>
            
            <Row>
                {api.map(apis => (
                    <Col span={8} >
                        <Cards api={apis} />
                    </Col>
                ))}

            </Row>

        </div>
    )
}
