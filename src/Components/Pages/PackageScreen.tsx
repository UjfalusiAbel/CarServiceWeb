import React, { useState } from 'react'
import { Button, Grid, Header, Icon, List, Segment } from 'semantic-ui-react'

export default function PackageScreen() {
    const [hoverOver, setHoverOver] = useState(false);
    return (
        <div>
            <Grid centered padded>
                <Header as="h1">Ofertele noastre pentru deținători de service</Header>
                <div style={{position:'absolute'}}>
                    <Grid padded columns={5} style={{padding:90}}>
                        <Grid.Column stretched>
                            <Segment onMouseOver={()=>setHoverOver(true)} onMouseOut={() => setHoverOver(false)} style={{width:370, transform: `${hoverOver ? 'scale(1.1,1.1)' : 'scale(1,1)'}`}}>
                                <Segment>
                                    <Header as="h2">Oferta I</Header>
                                </Segment>
                                <List>
                                    <br/>
                                    <br/>
                                    <List.Item>
                                        <Header as="h3" icon>
                                            Înscriere pe harta online
                                            <Icon name="hand pointer" color="blue"></Icon>
                                        </Header>
                                    </List.Item>
                                    <br/>
                                    <br/>
                                    <List.Item>
                                        <Header as="h3" icon>
                                            Facturare ușoară
                                            <Icon name="edit" color="blue"></Icon>
                                        </Header>
                                    </List.Item>
                                    <br/>
                                    <br/>
                                    <List.Item>
                                        <Header as="h3" icon>
                                            Acceptare programări online
                                            <Icon name="calendar alternate" color="blue"></Icon>
                                        </Header>
                                    </List.Item>
                                    <br/>
                                    <br/>
                                    <List.Item>
                                        <Header as="h2">
                                            25 RON / lună
                                        </Header>
                                        <br/>
                                        <Button primary style={{fontSize:18}}>Alege</Button>
                                    </List.Item>
                                </List>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}
