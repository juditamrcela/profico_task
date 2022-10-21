import React from 'react';
import './NewsBox.scss';
import {ILastesNewsData} from '../../types/LastesNews';


const NewsBox: React.FC<ILastesNewsData> =(props:ILastesNewsData)=>{
    const handleFavorites=(props:ILastesNewsData)=>{        
        localStorage.setItem("favorites",JSON.stringify(props))
    }
    return (
        <div className='news-box'>
           
            {props.multimedia && <img src={props.multimedia[1].url} alt=""></img>}
            <div className="overlay"></div>
            <h5 className='category'>
                {props.section}
            </h5>
            <div>
                <h5>{props.title}</h5>
                <p>{props.byline}</p>
                <a onClick={()=>handleFavorites(props)}>Add to favorites</a>
            </div>
        </div>
    )
}
export default NewsBox;
