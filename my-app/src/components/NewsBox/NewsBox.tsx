import React,{ useState} from 'react';
import './NewsBox.scss';
import {ILatestNewsData} from '../../types/LatestNews';
import { BsBookmark,BsFillBookmarkFill } from "react-icons/bs";



const NewsBox: React.FC<ILatestNewsData> =(props:ILatestNewsData)=>{

    const [isBookmark,setIsBookmark]=useState<Boolean>(false)
   
    const handleFavorites=(niz:ILatestNewsData)=>{ 
        const favoritesLocalStorage:ILatestNewsData[]=JSON.parse(localStorage.getItem("favorites") || "[]") 
        const bookMarkExists=favoritesLocalStorage.find((item:ILatestNewsData)=>item.title===niz.title)
       
        if(!bookMarkExists){
            localStorage.setItem("favorites",JSON.stringify([...favoritesLocalStorage,niz]))
            setIsBookmark(true)
        }
        else{
            setIsBookmark(false)
            
            const newArr = favoritesLocalStorage.filter(object => {
                return object.title !== niz.title;
              });
              localStorage.clear()
              console.log(favoritesLocalStorage)
              newArr.map((item)=>{
                localStorage.setItem("favorites",JSON.stringify([item]))
              })
            
        }
       
        
    }
    
    return (
        <div className='news-box'>
           
            {props.multimedia && <img src={props.multimedia[1].url} alt=""></img>}
            <div className="overlay"></div>
            <h5 className='category'>
                {props.section.toUpperCase()}
            </h5>
            <div>
                <h5>{props.title}</h5>
                <p>{props.byline}</p>
                <a onClick={()=>handleFavorites(props)} className="icon">
                    {isBookmark? <BsFillBookmarkFill></BsFillBookmarkFill> : <BsBookmark></BsBookmark>}
                    
                </a>
            </div>
        </div>
    )
}
export default NewsBox;
