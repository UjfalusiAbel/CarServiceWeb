import React, {useEffect, useState} from 'react'
import { Container, Dropdown, Grid, Header, Menu } from 'semantic-ui-react'
import axios from 'axios';
import { locations, counties } from '../../Utils/Locations';
import { Service } from '../../Models/Service';
import ServiceDashboard from '../Features/Services/ServiceDashboard';
import ServiceForm from '../Forms/ServiceForm';

interface IOption {
    key:string;
    text:string;
    value:string;
}

export default function SearchServiceScreen() {
    const [selectedCounty, setSelectedCounty] = useState<String>();
    const [selectedTown, setSelectedTown] = useState<String>();
    const [services, setServices] = useState<Service[]>([]);
    const [selectedService, setSelectedService] = useState<Service | undefined>(undefined)

    const getServices = (county:String | undefined, town:String | undefined) => {
        console.log(county);
        axios.get<Service[]>('http://localhost:5000/api/services/' + county + '/' + town).then(response => {
            setServices(response.data);
        })
    }

    const handleSelectedService = (id:string) => {
        setSelectedService(services.find(x => x.id === id));
    }

    const mapCounties = () => {
        const options:IOption[] = [];
        counties.map(res=>{
            const option:IOption = {
                key:res,
                text:res,
                value:res.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            }
            options.push(option);
        })
        return options;
    }

    const mapLocations = () => {
        const options:IOption[] = [];
        locations.map(res => {
            if(res.county.normalize('NFD').replace(/[\u0300-\u036f]/g, "") == selectedCounty)
            {
                res.cities.map(data => {
                    const option:IOption = {
                        key:data,
                        text:data,
                        value:data                    
                    }
                    options.push(option);
                })
            }
        })
        return options;
    }

    getServices(selectedCounty, selectedTown);
    
    return (
        <div>
            <Menu>
                <Menu.Item>
                    <Header as="h2">Județ</Header> 
                </Menu.Item>
                <Menu.Item>
                    <Dropdown search selection placeholder="Alege județ" options={mapCounties()} onChange={(e, value) => {setSelectedCounty(value.value?.toString())}}></Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <Header as="h2">Localitate</Header>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown search selection placeholder="Alege oraș" options = {mapLocations()} onChange = {(e,value) => {setSelectedTown(value.value?.toString())}}></Dropdown>
                </Menu.Item>
            </Menu>
            <Container style = {{marginTop: '2em'}}>
                <ServiceDashboard services={services}></ServiceDashboard>
                <ServiceForm></ServiceForm>
            </Container>
            
        </div>
    )
}
