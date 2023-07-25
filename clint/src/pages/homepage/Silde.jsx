import React from 'react'
import Category from './Category'
export default function Silde() {
  return (
  <>
    <div className="container-fluid">
        <div className="row">
            <div className="slide">
                <img src="https://i.pinimg.com/564x/ab/54/a8/ab54a8043d30a7c3bfd4aba6a167013b.jpg" alt="" className='img-fluid' />
            <div className="overlay">
            <div className="content">
            <h2>Background Overlay</h2>
                <p>
                  It's just a simple overlay without using the background-image property in CSS
                </p>
            </div>
            </div>
            </div>
        </div>
    </div>
  </>
  )
}
