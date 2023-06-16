import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"

const API_URL = "http://localhost:3000";

function PhoneDetails() {
    const [phone, setPhone] = useState(null)
    const { id } = useParams();

    const getPhone = () => {

        axios.get(`${API_URL}/phones/${id}`)
        .then((response) => {
            const singlePhone = response.data;
            setPhone(singlePhone)
        })
        .catch((error) => console.log(error));
    };

    useEffect (() => {
        getPhone();
    }, [])

  return (
    <div>PhoneDetails</div>
  )
}

export default PhoneDetails