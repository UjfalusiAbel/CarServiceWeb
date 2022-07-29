import { groupEnd } from 'console';
import React, { useState } from 'react'
import { Form, Grid, Segment, Header, Checkbox, Button} from 'semantic-ui-react'

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    return (
        <div>
            <Grid centered padded style={{ padding: 80 }}>
                <Grid.Column centered style={{ maxWidth: 450 }}>
                    <Segment >
                        <Header as="h2">Registrare utilizator</Header>
                        <Form style={{ fontSize: 18 }}>
                            <Form.Field>
                                <Form.Input label="E-mail" type="e-mail" placeholder="E-mail utilizator"></Form.Input>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input label="Nume" type="string" placeholder="Nume utilizator"></Form.Input>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input label="Prenume" type="string" placeholder="Prenume utilizator"></Form.Input>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input label="Parolă" type="password" placeholder="Parolă utilizator"></Form.Input>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input label="Parolă" type="password" placeholder="Parolă utilizator"></Form.Input>
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label="Accept termeni și condiții de utilizare" style={{ fontSize: 18 }}></Checkbox>
                            </Form.Field>
                            <Button primary fluid style={{ fontSize: 18 }}>Registrare utilizator</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}
