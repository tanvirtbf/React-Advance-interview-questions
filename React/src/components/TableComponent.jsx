import React from 'react'

const TableComponent = ({data}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((heading)=> <th key={heading}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            data.map((row)=> {
              return (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.price}</td>
                  <td>{row.category}</td>
                  <td>{row.stock}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
