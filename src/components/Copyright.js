import React from 'react'

const Copyright = () => {
    const currentYear = new Date().getFullYear();
  return (
    
        <footer>
            <p className='text-center  text-orange-600 font-serif '>&copy; {currentYear} develop by Puneet. All rights reserved.</p>
        </footer>
    
  )
}

export default Copyright