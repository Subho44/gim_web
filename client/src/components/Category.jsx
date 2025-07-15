import React from 'react'

const Category = () => {
  const products = [
    { id: 1, name: "Laptop", price: 56000, category: "Electronics" },
    { id: 2, name: "Laptop", price: 56000, category: "Electronics" },
    { id: 3, name: "Laptop", price: 56000, category: "Electronics" },
    { id: 4, name: "Laptop", price: 56000, category: "Electronics" },
    { id: 5, name: "Laptop", price: 56000, category: "Electronics" },
    { id: 6, name: "Laptop", price: 56000, category: "Electronics" },

  ]
  return <>
    <div className='container-fluid bg-dark text-light text-center'>
      <h1>Product List</h1>
    </div>
    <div className='container-fluid'>
      <table className='table table-dark'>
       <tr>
        <th>Id</th>
         <th>Product Name</th>
          <th>Price($)</th>
          <th>Category</th>
       </tr>
       {
        products.map((x,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{x.name}</td>
             <td>{x.price}</td>
              <td>{x.category}</td>
          </tr>
        ))
       }
      </table>
    </div>


  </>
}

export default Category