import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
const Edit = () => {
  const [student,setStudent] = useState([])
  const {id} = useParams()
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
async function editData(){
 try{
  await axios.put(`http://localhost:3000/students/${id}`,student)
 }catch(error){
  console.log(error)
 }
}
  return (
    <form className="container">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Edit Information</h3>
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                ID
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                disabled
                value={student.id}
              />
            </div>

            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={student.stuname}
              name='name'
            onChange={(e)=>setStudent({...student,stuname:e.target.value})}
              />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={student.email}
             name={'email'}
              onChange={(e)=>setStudent({...student,email:e.target.value})}
              
            />
          </div>
          <button type="submit" onClick={()=>editData()} className="btn btn-primary">
            Edit
          </button>
        </div>
      </div>
    </form>
  )
}

export default Edit