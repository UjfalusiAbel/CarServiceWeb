import React from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Service } from '../../../Models/Service'

interface Props{
    services: Service[];
}

const ServiceList = ({services}: Props) => {
  return (
    <Segment>
        <Item.Group divided>
            {services.map(service => (
                <Item key={service.id}>
                    <Item.Content >
                        <Item.Header as="a">{service.name}</Item.Header>
                        <Item.Meta>{service.category}</Item.Meta>
                        <Item.Description>
                            <div>{service.description}</div>
                            <div>{service.county}</div>
                            <div>{service.town}</div>
                            <div>{service.score}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' content='View' color='blue'></Button>
                            <Label basic content={service.category}></Label>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    </Segment>
  )
}

export default ServiceList;