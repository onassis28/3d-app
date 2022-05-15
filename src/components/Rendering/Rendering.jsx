import React from 'react'
import './rendering.css'

const Rendering = ({name, type, size}) => {
  return (
    <div>
	<p>Filename: {name}</p>
	<p>Filetype: {type}</p>
	<p>Size in bytes: {size}</p>
	</div>
  )
}

export default Rendering