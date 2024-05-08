import React from 'react'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navitage = useNavigate();

    return (
      <>
      <p>PAGE NOT FOUND</p>
      <button onClick={() => navitage(-1)}>Go back</button>
      </>
    )
}

export default PageNotFound
