import React from 'react'
import Topbar from '../compoment/Topbar'
import Nav from '../compoment/Nav'
import {Link} from 'react-router-dom'
import './Slide.css'
import { useState } from 'react'
import axios from 'axios'

export default function AllSlide() {
    const [slide, setSlide] = useState({
        title:"",
        link:""
    })

    const{title,link} = slide;

    const carrySlide = e=>{
        setSlide({...slide,[e.target.name]:e.target.value})
    }

    const onSumbit = async e=>{
        e.preventDefault()
        await axios.post("",slide)
    }




  return (
    <>
        <Topbar/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Nav/>
                </div>
                <div className="col-md-10">
                 
                       <h3> Add New Slide</h3>

                       <form  onSubmit={e=>onSumbit(e)}>

                            <input 
                                type="text"
                                className="form-control mt-10"
                                placeholder="Slider Title"
                                name="title"
                                value={title}
                                onChange={e=>carrySlide(e)}
                            />
                            <input 
                                class="form-control mt-4" 
                                id="formFileLg" 
                                type="file"
                            />

                            <input 
                                type="text"
                                className="form-control mt-4"
                                placeholder="Link to "
                                name="link"
                                value={link}
                                onChange={e=>carrySlide(e)}
                            />  
                            <button className="btn btn-primary mt-4"> Post Slide </button>
                            </form>

                    <div className="allslide">
                        <h5> All Slide List</h5>

                    <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
