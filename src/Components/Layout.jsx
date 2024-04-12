import React from 'react'
import Navbar from "./Navbar";
function Layout({children}) {
  return (
    <div
      className="container-fluid px-2 pt-5"
      style={{ backgroundColor: "#ECEEEF" }}
    >
       <Navbar />

       {children}

    </div>
  )
}

export default Layout