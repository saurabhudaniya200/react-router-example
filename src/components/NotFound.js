import React from 'react'

const NotFound = (props) => {
  const message = props.message || '404 not found'

  return (
  	<h1 className="text-muted text-center jumbotron" style={{background: 'none'}}>
      {message}
    </h1>
  )
}

export default NotFound;