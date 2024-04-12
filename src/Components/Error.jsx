import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className="container py-5">
      <div className="row jusify-content-center align-items-center">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-4">404 - Page Not Found</h1>
          <p className="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link to="/" className="btn btn-info mb-5">Go to Home Page</Link>
        </div>
      </div>
    </div>
  )
}

export default Error