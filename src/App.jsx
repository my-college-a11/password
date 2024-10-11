import React, {useState} from 'react'

function App() {
  const [pwd, setPwd] = useState('');
  const [isPwd, setIsPwd] = useState(false);
  return (
    <>
    <div className='container'>
    <h4>Show and Hide Password with React</h4>
    <div className='pwd-container'>
    <input 
    name='pwd'
    placeholder='Enter Password'
    type= {isPwd ? 'text': 'password'}
    value = {pwd}
    onChange={(e)=>setPwd(e.target.value)}
    />
    <button onClick={()=>setIsPwd(prevState => !prevState)}>
    {isPwd ? "hide password" : "show password"}
    </button>
    </div>
    </div>
    </>
  )
}

export default App