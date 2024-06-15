import React from 'react'
import { Appcontext } from '../context/Appcontext'
import { useContext } from 'react';

const Pagination = () => {

    const {page, setPage, totalPages, pagechangeHandler} = useContext(Appcontext);

  return (
    <div className="footer">
        <div className="footer-content">
        <div className="buttons">
            {
                page > 1 &&
                <button className="btn" onClick={() => pagechangeHandler(page - 1)}>Previous</button>
            }
            {
                page < totalPages &&
                <button className="btn" onClick={() => pagechangeHandler(page + 1)}>Next</button>
            }
        </div>

        <div className="txt">
            Page {page} of {totalPages}
        </div>
        </div>
    </div>
  )
}

export default Pagination