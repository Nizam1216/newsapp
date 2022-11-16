import React, { Component } from 'react'

export class Newsitem extends Component {
  

  render() {
    let {title, description,imageURL,newsURL,author,date,source} = this.props;
    return (
      <div className='my-3'><div className="card shadow p-3 mb-5 bg-body rounded">
  <img src={!imageURL?"https://www.swissinfo.ch/resource/image/45945846/landscape_ratio16x9/1920/1080/caa0764b3418d762daa605efa298d327/00A4B15C884C1E8D3D2F927F0EACC09B/fallback-1200x630-swi.jpg":imageURL}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5><span className="position-absolute top-0 translate-middle badge rounded-pill" 
    style={{left:'90%',zIndex:1,backgroundColor:'red'}}
    >
  {source}
  <span className="visually-hidden">source</span>
</span>


    <p className="card-text">{description}...</p>
    <p className="card-text"><small className='text-muted'>By{author} on {date}</small></p>
    <a  rel="noreferrer" href={newsURL} target="_blank"  className='btn btn-sm btn-dark'>Read More</a>
  </div>
</div>
</div>
    )
  }
}

export default Newsitem