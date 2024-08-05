import React from 'react'
import './css/login.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'


const Logout = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const a = { email, password }

  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    let dd = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(a)
    })
    dd = await dd.json()

    localStorage.setItem("user", JSON.stringify(dd))
    const data = localStorage.getItem("user")
    if (data) {
      navigate("/")
    }
  }

  useEffect(() => {
    const data = localStorage.getItem("user")
    if (data) {
      navigate("/")
    }
  }, [])

  return (
    <div className='full'>
      <div className='container-fluid'>
        <div className='box_login'>
          <div>
            <h2>Log-In</h2>
            <form action="/upload" method='post' enctype="multipart/form-data">
              <input className='mt-4' value={email} onChange={(e) => setemail(e.target.value)} type="text" name='name' id='name' placeholder='Your email' /> <br />

              <input value={password} onChange={(e) => setpassword(e.target.value)} type="text" name='name' id='name' placeholder='Your password' /> <br />

              {/* <input onChange={(e) => setimage(e.target.value)} type="file" name='image' id='image' placeholder='choose image' /><br /> */}
              <button onClick={(e) => login(e)}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logout
