import React, { useState } from "react";

const TableComponent = ({data}) => {
  const [search,setSearch] = useState("")


  const filteredData = data.filter((rowObj)=> {
    return Object.values(rowObj).some(
      value => value && value.toString().toLowerCase().includes(search.toLowerCase())
    )
  })


  return (
    <div>
      <input type="text" placeholder="search table component" onChange={(e)=> setSearch(e.target.value)} value={search} />
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map(heading => <th key={heading}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row)=> <tr key={row.id}>{Object.values(row).map(item=> <td key={item}>{item}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
