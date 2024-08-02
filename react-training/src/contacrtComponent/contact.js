

import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import About from '../aboutComponent/about';
const Contact = () => {
  //write code here
  let params = useParams();

  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [showAbout, setShowAbout] = useState(false)

  const successMessage = () => {
    return <About />
  }

  const onClick = (event) => {
    event.preventDefault();
    console.log(name, username, phoneNumber);
    const payload = {
      name: name,
      usename: username,
      phonenumber: phoneNumber
    }
    setShowAbout(!showAbout)
    successMessage()
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const name = formData.get('nameField')
    const username = formData.get('usernameField')
    const phone = formData.get('phoneField')
    console.log(name, username, phone);
  }

  const updateName = (value) => {
    const updatedValue = value + 'hello'
    setName(updatedValue)
  }

  const disableButton = (!name?.length || !username?.length || !phoneNumber?.length)

  console.log(disableButton);

  return (
    <div>
      <h1>Contact</h1>

      <form>
        <div>
          <label>Name</label>
          <input name='nameField' onChange={(event) => updateName(event.target.value)} value={name || ''} placeholder='type name' />
        </div>
        <div>
          <label>Username</label>
          <input name='usernameField' onChange={(event) => setUsername(event.target.value)} value={username || ''} placeholder='type username' />
        </div>
        <div>
          <label>Phone number</label>
          <input name='phoneField' onChange={(event) => setPhoneNumber(event.target.value)} value={phoneNumber || ''} placeholder='type phone number' />
        </div>
        <div>
          <button disabled={disableButton} onClick={(event) => onClick(event)}>Submit</button>
        </div>
      </form>

      {
        showAbout && successMessage()
      }
    </div>
  )
}

export default Contact;