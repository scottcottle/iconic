import React, {useEffect} from 'react';
import {useGlobalContext} from "../../contexts/GlobalContext";
import {Card, CardMedia, Typography} from "@mui/material";
import {Iconic} from "../../components/iconic/Iconic";
import "./Organization.scss"

interface OrganizationProps {}

const Organization: React.FC<OrganizationProps> = () =>{
    const {setPageTitle, contacts} = useGlobalContext();

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(()=>{
        setPageTitle("Organization")
    })

    return <div className={'organization'}>
        {contacts.length > 0 &&
            contacts.map((contact:any)=>(
                <Card className={'card'} key={`contactCard-${contact.id}`} elevation={5}>
                    <CardMedia>
                        <Iconic icon={'work'} type={'icon'} size={'128px'} color={getRandomColor()}/>
                    </CardMedia>
                    <Typography gutterBottom variant="h2" component="div">
                        {contact.name}
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                        {contact.company.name}
                    </Typography>
                    <Typography>
                        contact:{contact.phone}
                    </Typography>
                    <Typography>
                        email:{contact.email}
                    </Typography>
                    <Typography>
                        website:{contact.website}
                    </Typography>

                </Card>
            ))
        }
    </div>
}
export default Organization;