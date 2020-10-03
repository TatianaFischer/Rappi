import React, { useState } from 'react';
import {
    InputContainer,
    Tittle,
    FilterResponse,
    RestCard,
    RestLogo,
    CardFooter,
    CardName,
    CardInfo
} from './styles'

import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const Filter = (props) => {
    
    const [name, setName] = useState("")

    const handleInputChange = (event) => {
        setName(event.target.value)
    }

    const orderedList = props.restaurants.filter(restaurant => {
        const newName = restaurant.name.toLowerCase();
        return newName.indexOf(name.toLowerCase()) > -1
    })

    
    return (
        <div>
            <InputContainer>
            <TextField
              variant="outlined" 
              placeholder="Restaurantes"
              fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
            onChange={handleInputChange} />
            </InputContainer>
            <FilterResponse>
            {name === "" ? (<Tittle>Busque por nome do restaurante</Tittle>) : 
            (orderedList.length !== 0 ? (
            orderedList.map(restaurant => {
                return (
                    <RestCard>
                        <RestLogo src={restaurant.logoUrl} />
                        <CardName>{restaurant.name}</CardName>
                        <CardFooter>
                            <CardInfo>{restaurant.deliveryTime} min</CardInfo>
                            <CardInfo>Frete: R$ {restaurant.shipping},00</CardInfo>
                        </CardFooter>
                    </RestCard>
                )
            })) : (<Tittle>Nenhuma correspondencia :( </Tittle>)
            )}
            </FilterResponse>
        </div>
    )
}
export default Filter;