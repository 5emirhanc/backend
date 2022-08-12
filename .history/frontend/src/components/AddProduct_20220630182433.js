import React from 'react'

export const AddProduct = () => {
  return (
    <div>
        <form>
            <div className='field'>
                <label className='label'>Title</label>
                <input className='input' type="text" placeholder='Title'></input>
            </div>

            <div className='field'>
                <label className='label'>Title</label>
                <input className='input' type="text" placeholder='Title'></input>
            </div>

            <div className='field'>
                <button className='button'>Save</button>
            </div>
        </form>
    </div>
  )
}
