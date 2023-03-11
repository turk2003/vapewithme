import './login.css'
import { useState } from 'react'
function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    function printdata(){
        console.log(username)
        console.log(password)
    }
    return(
        <div className='bg'>
            <div className='from'>
                <h1>เข้าสู่ระบบ</h1>
                <div className='fromcontrol'>
                    <label>username</label>
                    <input  type='text' placeholder='กรอก username' onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className='fromcontrol'>
                    <label>password</label>
                    <input  type='password' placeholder=' กรอก password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className='btn0' onClick={printdata} >เข้าสู่ระบบ</button>
                <div className='toregister'>
                    <h3>หากไม่ได้เป็นสมาชิก  <a href='/Login'>สมัครที่นี่</a></h3>
                </div>
                
            </div>
        </div>
    )
}
export default Login