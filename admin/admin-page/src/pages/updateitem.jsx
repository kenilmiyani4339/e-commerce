import React, { useEffect } from 'react'
import './css/updateitem.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const Updateitem = () => {

  const navigate = useNavigate()

  const [name, setname] = useState("")
  const [newprice, setnewprice] = useState()
  const [oldprice, setoldprice] = useState()
  const [description, setdescription] = useState("")
  const [image, setimage] = useState("")


  const { id } = useParams()


  useEffect(() => {
    updateitem()
  }, [])

  const updateitem = async () => {
    let result = await fetch(`http://localhost:3000/updateget/${id}`)
    result = await result.json()
    setname(result.name)
    setnewprice(result.newprice)
    setoldprice(result.oldprice)
    setdescription(result.description)

  }

  const updateproduct = async (e) => {
    e.preventDefault()

    const a = { name, newprice, oldprice, description, image }
    console.log('a: ', a);

    let result = await fetch(`http://localhost:3000/updateitem/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(a)
    })
    result = await result.json()
    console.log('result: ', result);

    if (result.modifiedCount === 1) {
      navigate("/")
    }

  }


  return (
    <div className='full'>
      <div className='container-fluid'>
        <div className='box'>
          <div>
            <h2>Update-Items</h2>
            <form action="#">
              <input value={name} onChange={(e) => setname(e.target.value)} type="text" name='name' id='name' placeholder='product name' /> <br />
              <input value={newprice} onChange={(e) => setnewprice(e.target.value)} type="number" name='newrprice' id='newprice' placeholder='Product new price' /><br />
              <input value={oldprice} onChange={(e) => setoldprice(e.target.value)} type="number" name='oldprice' id='oldprice' placeholder='Product old price' /><br />
              <textarea value={description} onChange={(e) => setdescription(e.target.value)} type="text" name='description' id='description' placeholder='product description' /> <br />
              <input onChange={(e) => setimage(e.target.value)} type="file" name='image' id='image' placeholder='choose image' /><br />
              <button onClick={(e) => updateproduct(e)}>Update product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updateitem
