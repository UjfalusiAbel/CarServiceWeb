import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import mainCarImage from '../../assets/Main/mainPageCar.png';
import { List, Button, Form, Grid, Header, Image, Segment, Menu, Icon } from "semantic-ui-react";

export default function MainScreen() {
    return (
        <div>
            <Header></Header>
            <Grid centered padded >
                <div style={{ position: 'absolute' }}>
                    <Grid padded columns={3}>
                        <Grid.Column stretched>
                            <Segment style={{ width: 370 }}>
                                <Segment>
                                    <Header as="h2">Caut o service</Header>
                                </Segment>
                                <List>
                                    <List.Item>
                                        <Header as='h2' icon>
                                            Căutare online
                                            <Icon name="wrench" color='blue'></Icon>
                                        </Header>
                                    </List.Item>
                                    <br />
                                    <br />
                                    <List.Item>
                                        <Header as='h2' icon>
                                            Programare online
                                            <Icon name="calendar check" color='blue'></Icon>
                                        </Header>
                                    </List.Item>
                                    <br />
                                    <br />
                                    <List.Item>
                                        <Header as='h2' icon>
                                            Oferta preț
                                            <Icon name="clipboard" color='blue'></Icon>
                                        </Header>
                                    </List.Item>
                                </List>
                            </Segment >
                        </Grid.Column>
                        <Grid.Column></Grid.Column>
                        <Grid.Column stretched>
                            <Segment style={{ width: 370 }}>
                                <Segment>
                                    <Header as="h2">Am o service</Header>
                                </Segment>
                                <List>
                                    <List.Item>
                                        <Header as='h2' icon>
                                            Înregistrare online
                                            <Icon name="globe" color='blue'></Icon>
                                        </Header>
                                    </List.Item>
                                    <br />
                                    <br />
                                    <List.Item>
                                        <Header as='h2' icon>
                                            Facturare ușoară
                                            <Icon name="pencil alternate" color='blue'></Icon>
                                        </Header>
                                    </List.Item>
                                    <br />
                                    <br />
                                    <List.Item>
                                        <Header as='h2' icon>
                                            Baza de date online
                                            <Icon name="database" color='blue'></Icon>
                                        </Header>
                                    </List.Item>
                                </List>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>
                <Image src={mainCarImage} style={{ zIndex: -1 }}></Image>
            </Grid>
        </div>
    )
}


