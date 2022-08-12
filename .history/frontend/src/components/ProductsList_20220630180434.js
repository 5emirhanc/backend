import React from 'react'

export const ProductsList = () => {
  return (
    <div>
        <table>
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
                        <button className='button is-small is-info'></button>
                        <button className='button is-small is-info'></button>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
