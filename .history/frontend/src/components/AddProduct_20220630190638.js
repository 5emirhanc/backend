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
                <label className='label'>Price</label>
                <input className='input' type="text" placeholder='Title'></input>
            </div>

            <div className='field'>
                <button className='button is-primary'>Save</button>
            </div>
        </form>
    </div>
  )
}
