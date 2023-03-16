import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
const Home = () => {
  const [students, setStudents] = useState([]);
  const [addStudent,setAddStudent] = useState({
    stuname:'',
    email:''
  })
  async function putData () {
await axios.post(`http://localhost:3000/students`,addStudent)
  }
  function onTextChange(e){
    setAddStudent({
      ...addStudent,
      [e.target.name]:e.target.value
    })
  }
  async function getData() {
    const data = await axios.get(`http://localhost:3000/students`);
    setStudents(data.data);
  }
  
  useEffect(() => {
    getData();
  }, []);
  async function deleltData(id){
    await axios.delete(`http://localhost:3000/students/${id}`);
  }
  return (
    <>
      <h1 className="text-center mt-5">React CRUD with API Call</h1>
      <div className="container mt-5">
        <h4>Add Student</h4>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" onChange={(e)=>onTextChange(e)} name="stuname" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" name="email" onChange={(e)=>onTextChange(e)}/>
              </div>
              <button type="submit" onClick={()=>putData()} className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 ">
            <h4 className="text-center">Student List</h4>

            <table className="table">
              <thead>
                {students.map((students) => {
                  return (
                    <tr key={students.id}>
                      <th scope="col">{students.id}</th>
                      <th scope="col">{students.stuname}</th>

                      <th scope="col">{students.email}</th>
                      <th>
                        <span>
                          {" "}
                          <Link to={`/view/${students.id}`}>
                            {" "}
                            <AiOutlineEye />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit/${students.id}`}>
                            {" "}
                            <AiOutlineEdit />{" "}
                          </Link>{" "}
                        </span>
                        <span onClick={()=>deleltData(students.id)}>
                          <AiOutlineDelete />{" "}
                        </span>
                      </th>
                    </tr>
                  );
                })}
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
///   <AiOutlineDelete />                          <AiOutlineEdit />                           <AiOutlineEye />
