import React from 'react'

const Cards = ({ data }) => {
    console.log(data)
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4'>
                {data.map((item, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <div className="card-img-wrapper">
                                <img src={item.imageUrl} className="card-img-top" alt={item.title} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.subtitle}</p>
                            </div>
                            <div className="card-footer">
                            Author Name : {item.authorName}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards