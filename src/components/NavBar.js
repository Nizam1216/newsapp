
import React, { Component } from 'react'


export class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                       <button type='button'className="btn btn mx-2" style={{margin:'0%',backgroundColor:'red'}}> <a className="navbar-brand" href="/">News Buzz </a></button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                                <button type='button'className="nav-item btn outline"><a href="/business"style={{textDecoration:"none",color:'white'}}>Business </a></button>
                                <button type='button'className="nav-item btn outline"><a href="/entertainment"style={{textDecoration:"none",color:'white'}}>Entertainment </a></button>
                                <button type='button'className="nav-item btn outline"><a href="/health"style={{textDecoration:"none",color:'white'}}>Health</a></button>
                                <button type='button'className="nav-item btn outline"><a href="/science"style={{textDecoration:"none",color:'white'}}>Science</a></button>
                                <button type='button'className="nav-item btn outline"><a href="/sports"style={{textDecoration:"none",color:'white'}}>Sports</a></button>
                                <button type='button'className="nav-item btn outline"><a href="/Technology"style={{textDecoration:"none",color:'white'}}>Technology </a></button>
                                <button type='button'className="nav-item btn outline"><a href="/general"style={{textDecoration:"none",color:'white'}}>General</a></button>
                                <button type='button'className="nav-item btn outline" ><a href="About"style={{textDecoration:"none",color:'white'}}>About</a></button>
                              </ul>
      

                        </div>
                        </div>
                </nav>

            </div>
        )
    }
}

export default NavBar