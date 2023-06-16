import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

const API_URL = "http://localhost:3000";

function PhoneList() {
    const [phones, setPhones] = useState([]);

    const getPhones = () => {
        axios.get(`${API_URL}/phones`)
        .then((response) => setPhones(response.data))
        .catch((error) => console.log(error));
    };
    useEffect(() => {
        getPhones();
    }, [])

  return (
    <div className="phone-list">
        {phones.map((phone) => (
            <div key={phone.id}>          
                <img className="phone-list-img" src={phone.imageFileName} alt="list-img"/>
                <Link className="btn list-group-item list-group-item-action" to={`/${phone.id}`}>
                <h1>{phone.name}</h1>
                </Link>
                </div>
        ))}
    </div>
  )
}

export default PhoneList