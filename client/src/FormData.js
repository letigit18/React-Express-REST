import './form.css'
import { useState } from 'react';
const FormData = () =>{
  let [userData, setUserData] = useState({fname: '', sex: '', department: ""})
  let [error, setError] = useState ({nameError: '', sexError: '', departmentError: ''})
  let [status, setStatus] = useState(0);
  const handleSubmit = (e)=>{
    e.preventDefault();
   //validating name
   if(userData.fname === ''){
    setError((error)=> ({...error, nameError: "Name required"}))
   }
   else if(/^[A-Za-z]{3,30}$/.test(userData.fname) === false){
    setError((error)=> ({...error, nameError: "Invalid name"}))
   }
   
   else{
    setStatus(1)
   }
   //validating department
   if(userData.department === ''){
    setError((error)=>({...error, departmentError: "Department required"}))
   }
   else if(/^[A-Za-z]{3,50}$/.test(userData.department) === false){
    setError((error)=>({...error, departmentError: "please enter valid department"}))
   }
   else{

   }
   //validating sex
 if(userData.sex === ''){
  setError((error)=>({...error, sexError: "Sex required"}))

 }
 fetch('http://localhost:5000/register', {
  method: "post",
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify(userData)
 })
 .then(res => res.json())
 .then(data => console.log(data.message))
 .catch(error => console.log(error))
  }
    return(
        <>
         <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor='fname' id='fname' className='form-control'>
                Name
              </label>
              <input type='text' name='fname' id='fname' className='form-control' onChange={e => setUserData({...userData, fname: e.target.value})} />
              <span className='error'>{error.nameError}</span>
              <label htmlFor="deparment" id='deparment' className="form-control">
                Department
              </label>
              <span className='error'>{error.departmentError}</span>
              <input type='text' name='deparment' id='deparment' className='form-control' onChange={e => setUserData({...userData, department: e.target.value})} />
              <label htmlFor='sex' id='sex' className='form-control'>
                Sex
              </label>
              <select name='sex' className='form-control' onChange={e => setUserData({...userData, sex: e.target.value})}>
                <option>Select your sex</option>
                <option value={'Male'}>Male</option>
                <option value={'Female'}>Female</option>
              </select>
              <span className='error'>{error.sexError}</span>
              <button type='submit' className='btn'>Register</button>
            </form>
         </div>
        </>
    )
}
export default FormData;