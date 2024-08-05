import React, { useState } from 'react'
import './css/additem.css'
import { useNavigate } from 'react-router'

const Additem = () => {

    const [name, setname] = useState("")
    const [newprice, setnewprice] = useState()
    const [oldprice, setoldprice] = useState()
    const [description, setdescription] = useState("")
    // const [image, setimage] = useState(null)


    const navigate = useNavigate()

    const adddata = async (e) => {
        const a = { name, newprice, oldprice, description }
        console.log('a: ', a);
        e.preventDefault()

        let result = await fetch("http://localhost:3000/upload", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(a)
        })
        result = await result.json()
        console.log('result: ', result);

        if (!result.result.name || !result.result.newprice || !result.result.oldprice || !result.result.description) {
            navigate("/additem")
        } else {
            navigate("/")

        }
    }


    return (

        <div className='full'>
            <div className='container-fluid'>
                <div className='box'>
                    <div>
                        <h2>ADD-ITEMS</h2>
                        <form action="#">
                            <input value={name} onChange={(e) => setname(e.target.value)} type="text" name='name' id='name' placeholder='product name' /> <br />
                            <input value={newprice} onChange={(e) => setnewprice(e.target.value)} type="number" name='newrprice' id='newprice' placeholder='Product new price' /><br />
                            <input value={oldprice} onChange={(e) => setoldprice(e.target.value)} type="number" name='oldprice' id='oldprice' placeholder='Product old price' /><br />
                            <textarea value={description} onChange={(e) => setdescription(e.target.value)} type="text" name='description' id='description' placeholder='product description' /> <br />
                            {/* <input value={image} onChange={(e) => setimage(e.target.value)} type="file" name='image' id='image' placeholder='choose image' /><br /> */}
                            <button onClick={(e) => adddata(e)}>Add product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Additem
