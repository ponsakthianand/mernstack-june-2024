
import ButtonComponent from '../shared/buttonComponent';
import { Outlet } from 'react-router-dom';
import { apiUrl } from '../utils/utils'

const About = () => {
  //write code here

  const onclick = () => {
  }


  return (
    <div>
      <h1>About</h1>
      <ButtonComponent buttonName={''} buttonHandler={onclick} />
      <Outlet />
      {apiUrl}
    </div>
  )
}

export default About;