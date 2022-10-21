import React from "react";
import INewsData from '../../types/News';
import moment from "moment";
import './LatestNews.scss';
export interface INewsDataProps{
    news:INewsData[];
}

const LatestNewsWidget:React.FC<INewsDataProps>=(props:INewsDataProps)=>{

    return(
        <div className="container">
        <h5>Latest news</h5>
        <div className='lastes-news-widget'>
            <div>
            {props.news.map((n:INewsData)=>{
                    return (
                        <div className="last-news">
                            <p>{moment(n.publishedAt).format('HH:mm')}</p>
                            <h5>{n.title}</h5>
                            <hr></hr>
                        </div>
                    
                    )
                })}
            </div>
                
                
           
        
        </div>
        <div className="button">
            <a>See all news {'>'}</a>
        </div>  
        
    </div>
    )
}
export default LatestNewsWidget