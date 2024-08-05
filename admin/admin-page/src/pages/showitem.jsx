import React, { useEffect, useState } from 'react'
import './css/showitem.css'
import { RxCross1 } from "react-icons/rx";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Showitem = () => {

    const [data, setdata] = useState([])
    // console.log('data: ', data);

    useEffect(() => {
        getitem()
    }, [])

    const getitem = async () => {
        let result = await fetch("http://localhost:3000/showitem")
        result = await result.json()
        setdata(result)
    }

    const deleteitem = async (id) => {
        let result = await fetch(`http://localhost:3000/deleteitem/${id}`, {
            method: "delete"
        })
        result = await result.json()
        console.log('result: ', result);
        getitem()

        alert("item deleted succesfully")
    }



    return (
        <div className='showitem'>
            <div className='container-fluid'>
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <th>delete</th>
                                <th>update</th>
                                <th>productname</th>
                                <th>productprice</th>
                                <th>oldprice</th>
                                <th>description</th>

                            </tr>
                        </thead>
                        {
                            data.map((value) => (
                                <tbody>
                                    <tr>
                                        <td><RxCross1 size={22} color='black' style={{ cursor: "pointer" }} onClick={() => deleteitem(value._id)} /></td>
                                        <td><Link to={`/updateitem/${value._id}`} ><GrUpdate size={22} color='black' /></Link></td>
                                        <td>{value.name}</td>
                                        <td>{value.newprice}</td>
                                        <td><del>{value.oldprice}</del></td>
                                        <td>{value.description}</td>
                                    </tr>
                                </tbody>
                            ))
                        }

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Showitem
