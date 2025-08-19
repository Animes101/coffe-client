import React from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {


    const {id}=useParams();

  return (
    <form action={} method=''>
        <input type="text" name="coffeName" id="coffeName" />
        <input type="number" name="prices" id="prices" />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Update