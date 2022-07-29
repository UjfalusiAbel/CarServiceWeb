import React, {useState} from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import RegisterScreen from "./RegisterScreen";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <Header></Header>
            <Grid centered padded style={{ padding: 80 }}>
                <Grid.Column style={styles.column}>
                    <Segment>
                         <Header as="h2">Logare</Header>
                         <br></br>
                        <Form style={{ fontSize: 18 }}>
                            <Form.Field>
                                <Form.Input label="E-mail" type="e-mail" placeholder="E-mail utilizator" onChange={(text)=>setEmail(text.target.value)}></Form.Input>
                            </Form.Field>
                            <br></br>
                            <Form.Field>
                                <Form.Input label="Parolă" type="password" placeholder="Parolă utilizator" onChange={(text)=>setPassword(text.target.value)}></Form.Input>
                            </Form.Field>
                            <br></br>
                            <Button primary fluid>Logare</Button>
                            <Segment>
                                Nu aveți un cont? 
                                <a href="/register"> Registrare</a>
                            </Segment>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

const styles = {
    column:{
        maxWidth: 550,
        marginTop: 20
    }
}

