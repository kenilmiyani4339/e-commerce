import React, { useEffect, useState } from 'react'

const Shop = () => {

    const [data, setdata] = useState([])

    useEffect(async () => {
        let result = await fetch("http://localhost:3000/products")
        result = await result.json()
        setdata(result)
    }, [])

    
    return (
        <>
            <div className='container'>
                {
                    data.map((result) => (
                        <div>{result.name}</div>
                    ))
                }
            </div>
        </>
    )
}

export default Shop
