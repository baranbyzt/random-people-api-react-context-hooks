

import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
// COMPONENTS
import Component from "./Component";




function GetApi() {

    const [username, setUsername] = useState([]);

    const fetchUsers = () => {
    axios.get('https://randomuser.me/api/?results=1').then(resp => {
        setUsername(resp.data.results[0])
});
    }

    useEffect(() => {
      fetchUsers()
    }, [])


    return(
        <>

<Component 
username = {username}
/>


        </>
    )
    }
    export default GetApi


/*

name = {username.name.first +' ' + username.name.last}
email = {username.email} 
image = {username.picture.large}
homeTown = {username.location.country + '/' + username.location.city}


   let name = `${username.name.first} ${username.name.last}`;
    let email = username.email;
    let image = username.picture.large;
   let homeTown = `${username.location.country}/${username.location.city}`
   

*/