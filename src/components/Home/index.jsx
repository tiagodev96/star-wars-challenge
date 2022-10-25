import { Box } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.scss'

const Home = () => {
    const [people, setPeople] = useState([])

    let params = useParams()

    const getKeyDefiner = () => {
        let keyDefined = 0;
        if (params.page === '1' || !params.page) {
            keyDefined = 1;
        }
        if (params.page === '2') {
            keyDefined = 11;
        }
        if (params.page === '3') {
            keyDefined = 22;
        }
        if (params.page === '4') {
            keyDefined = 32;
        }
        if (params.page === '5') {
            keyDefined = 42;
        }
        if (params.page === '6') {
            keyDefined = 52;
        }
        if (params.page === '7') {
            keyDefined = 62;
        }
        if (params.page === '8') {
            keyDefined = 72;
        }
        if (params.page === '9') {
            keyDefined = 82;
        }

        return keyDefined
    }

    useEffect(() => {
        getPeople()
    }, [people])

    const getPeople = () => {
        let url = `https://swapi.dev/api/people/?page=${params.page !== undefined ? params.page : 1}`

        let response = axios.get(url)
            .then((res) => {
                setPeople(res.data.results)
            }).catch(error => console.log(error));

        return response
    }


    return (
        <div>
            <Box display="flex" flexWrap="wrap" gap="40px" width="100%" padding="40px 92px" alignItems="center" justifyContent="center">
                {people.length === 0 ?
                    <h1>Loading...</h1>
                    :
                    people.map((person, key) => (
                        <div key={key} className="card">
                            <h2>{person.name}</h2>
                            <p>{person.gender}</p>
                            <Link to={`/people/${key + getKeyDefiner()}`}>
                                <button>Details</button>
                            </Link>
                        </div>
                    ))}
            </Box>

            <Box display='flex' alignItems="center" gap="20px" justifyContent="center">
                <Link className={`page ${params.page === '1' || !params.page ? "active" : " "}`} to="/1">1</Link>
                <Link className={`page ${params.page === '2' ? "active" : " "}`} to="/2">2</Link>
                <Link className={`page ${params.page === '3' ? "active" : " "}`} to="/3">3</Link>
                <Link className={`page ${params.page === '4' ? "active" : " "}`} to="/4">4</Link>
                <Link className={`page ${params.page === '5' ? "active" : " "}`} to="/5">5</Link>
                <Link className={`page ${params.page === '6' ? "active" : " "}`} to="/6">6</Link>
                <Link className={`page ${params.page === '7' ? "active" : " "}`} to="/7">7</Link>
                <Link className={`page ${params.page === '8' ? "active" : " "}`} to="/8">8</Link>
                <Link className={`page ${params.page === '9' ? "active" : " "}`} to="/9">9</Link>
            </Box>
        </div>
    )
}

export default Home
