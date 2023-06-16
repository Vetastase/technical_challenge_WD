import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"

const API_URL = "http://localhost:3000";

function PhoneDetails(props) {
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
    <div className="phone-details d-flex flex-wrap">
        {phone && (
            <div>
                <div>
                    <div>
                <img src={phone.imageFileName} className="details-img" alt="phone-img" />
                </div>
                <div>
                    <h1>{phone.name}</h1>
                    <p>{phone.manufacturer}</p>
                    <p>{phone.description}</p>
                    <p>{phone.color}</p>
                    <p>{phone.price}</p>
                    <p>{phone.screen}</p>
                    <p>{phone.processor}</p>
                    <p>{phone.ram}</p>
                </div>
                </div> 
                </div> 
        )}
    </div>
  )
}

export default PhoneDetails