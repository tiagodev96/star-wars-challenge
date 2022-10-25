import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const People = () => {
    let params = useParams();
    const [person, setPerson] = useState([]);
    const [specieName, SetSpecieName] = useState([]);

    useEffect(() => {
        getPerson()
    })

    const getPerson = () => {
        let response = axios.get(`https://swapi.dev/api/people/${params.id}`)
            .then(res => {
                setPerson(res.data)
                getSpecieName(person.species[0])
            })
            .catch(err => console.log(err))
        return response
    }

    const getSpecieName = (url) => {
        let response = axios.get(url).then(res => {
            SetSpecieName(res.data.name)
            console.log(res.data.name)
        }).catch(err => console.log(err));


        return response
    }

    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Height: {person.height}</p>
            <p>Gender: {person.gender}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Specie Name: {specieName.length > 0 ? specieName : "No Specie"}</p>
        </div>
    )
}

export default People
