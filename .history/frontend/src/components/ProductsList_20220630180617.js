import React from 'react'

export const ProductsList = () => {
  return (
    <div>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Prices</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Title</td>
                    <td>999</td>
                    <td>
                        <button className='button is-small is-info'>Edit</button>
                        <button className='button is-small is-danger'>Delete</button>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
