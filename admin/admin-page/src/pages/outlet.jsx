import React from 'react'
import {  Outlet } from 'react-router'
import { Navigate } from 'react-router'

const Privateoutlet = () => {
    const data = JSON.parse(localStorage.getItem("user"))

    return (
        <>
            {data ? <Outlet /> : <Navigate to={("/login")} />}
        </>
    )
}

export default Privateoutlet
