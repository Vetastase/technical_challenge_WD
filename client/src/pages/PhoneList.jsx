import React from 'react'
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
    <div>
    </div>
  )
}

export default PhoneList