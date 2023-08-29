import React from 'react'

const Button = ({text,link}) => {
    return (
        <div>
            <a className='btn' href = {link}  > {text}</a>
        </div>
    )
}

export default Button
