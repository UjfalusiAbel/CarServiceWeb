import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { Service } from '../../../Models/Service'
import ServiceDetails from '../../Details/ServiceDetails';
import ServiceList from './ServiceList';

interface Props
{
    services: Service[];
}

const ServiceDashboard = ({services}:Props) => {
  return (
    <Grid>
        <Grid.Column width="10">
          <ServiceList services={services}></ServiceList>
        </Grid.Column>
        <Grid.Column width="6">
          {services[0] && 
          <ServiceDetails service = {services[0]} ></ServiceDetails>}
        </Grid.Column>
    </Grid>
  )
}

export default ServiceDashboard