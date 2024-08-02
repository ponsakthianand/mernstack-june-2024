

import { Routes, Route, useParams } from 'react-router-dom';
const NotFound = () => {
  //write code here
  let params = useParams();



  return (
    <div>
      <h1>404</h1>

      {params.id}

    </div>
  )
}

export default NotFound;