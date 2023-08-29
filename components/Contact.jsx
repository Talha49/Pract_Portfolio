import React from 'react'
import Heading from './Heading'

const Contact = () => {
    return (
        <section id='CU' className='container mx-auto px-4 py-10'>
            <Heading title="Contact Us"/>

<form className='flex flex-col gap-8'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
<input type='email' placeholder='Email' className='inputStyles' />
<input type='email' placeholder='Email' className='inputStyles' />
</div>
<input type='email' placeholder='Email' className='inputStyles' />
<textarea rows="6" placeholder='Message' className='inputStyles'>
   
    
     </textarea>
     <div>
        <button type='submit' className='btn'>Send Message</button>
    </div>
</form>




        </section>
    )
}

export default Contact
