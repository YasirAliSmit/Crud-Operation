import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const View = () => {
  const [student,setStudent] = useState([])
  const {id} = useParams()
  console.log(id)
  async function getData(){
    try{

      const data = await axios.get(`http://localhost:3000/students/${id}`)
      setStudent(data.data)
    }catch(error){
console.log(error,`error`)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (

    <div className="conatiner">
      <div className="row">
        <div className="">
          <h4 className="text-center">Student List</h4>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{student.id}</th>
                <td>{student.stuname}</td>
                <td>{student.email}</td>
                <td>@mdo</td>
              </tr>
            </tbody>
            <Link to="/">
              <button type="button" className="btn btn-primary ">
                Go back Home
              </button>
            </Link>
          </table>
        </div>
      </div>
    </div>
  )
}

export default View