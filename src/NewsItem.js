
import React from "react";

const NewsItem =(props)=> {


    let { title, description, ImageUrl, NewsUrl, author, date, source } = props;
    return (
      <>
        <div className='my-3'>
          <div className="card" style={{ width: "18rem" }}>
            <img src={!ImageUrl ? "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/4121acf06362f6478b7aa2157658f300.jpg" : ImageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <span className="badge text-bg-info">{source}</span>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={NewsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Go somewhere</a>
              <p className="card-text color-dark"><small className="text-muted">Author: {!author ? "Uknown" : author}</small></p>
              <p className="card-text color-dark"><small className="text-muted"> Date of Release: {new Date(date).toGMTString()}</small></p>

            </div>
          </div>
        </div>
      </>



    )
  }


export default NewsItem

