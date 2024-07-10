import React from 'react'

const Table = ({ data }) => {
    return (
        <div className='container'>
        <table className='table table-striped table-hover'>
          <thead className='table-dark'>
            <tr>
              <th>SR NO</th>
              <th>NEWS TITLE</th>
              <th>AUTHOR</th>
              <th>DATE & TIME</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Table
