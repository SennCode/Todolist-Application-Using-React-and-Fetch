import React, {useState, useEffect} from 'react';

const HOSTNAME = "https://assets.breatheco.de/apis/fake";

const AddNAme = () {
    const [names, setNames] = useState([])

    const listNames = async () => {
        const res = await
        fetch(`${HOSTNAME}/todos/user`, {
            method: "GET",
            headers: {
                "Content-type" : "application/json"
            }
        })
        const data = await res.json()
        setNames(data)
    }
}
