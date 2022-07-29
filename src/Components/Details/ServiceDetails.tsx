import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Service } from '../../Models/Service'

interface Props{
    service: Service
}

const ServiceDetails = ({service}: Props) => {
    return (
        <Card fluid>
            <Image></Image>
            <Card.Content>
                <Card.Header>{service.name}</Card.Header>
                <Card.Meta>
                    <span>{service.category}</span>
                </Card.Meta>
                <Card.Description>{service.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user'></Icon>
                </a>
            </Card.Content>
        </Card>
    )
}

export default ServiceDetails