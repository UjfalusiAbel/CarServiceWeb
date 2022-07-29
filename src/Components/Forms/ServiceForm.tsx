import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const ServiceForm = () => {
  return (
    <Segment clearing>
        <Form>
            <Form.Input placeholder="Nume"></Form.Input>
            <Form.Input placeholder="Categorie"></Form.Input>
            <Form.Input placeholder="Județ"></Form.Input>
            <Form.Input placeholder="Oraș"></Form.Input>
            <Form.Input placeholder="Descriere"></Form.Input>
            <Button floated="right" positive type="submit" content="Adaugă"></Button>
            <Button floated="right" type="button" content="Înapoi"></Button>
        </Form>
    </Segment>
  )
}

export default ServiceForm