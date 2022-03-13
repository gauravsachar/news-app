import React, { Component } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {

  


  
    render() {

      function strip(html){
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
     }

      let {title,desc, imgurl,newsurl,date, author,source} = this.props;
      let altimage="https://www.ucu.org.uk/media/7555/News/image/pile-of-newspapers_full.png"
    return (
      <div className='container my-3'>
          <div className="card blocks" style={{width : '18rem'}}>
            <img src={imgurl? imgurl : altimage} className="card-img-top newsimage" alt="We are fixing it soon!"/>
            <div className="card-body">
            <span className="badge bg-warning text-light">{source}</span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text author"><small className="text-muted">- <b>{!author?'Anonymous' : strip(author)}</b> on <br/> {new Date(date).toISOString().split('T')[0]}</small></p>
                <a href={newsurl} className="btn btn-sm btn-primary read">Read complete...</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem