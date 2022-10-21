import React from 'react';
import { useEffect,useState } from 'react';
import INewsData  from './../../types/News';
import NewsBox from '../NewsBox/NewsBox';
import {ILastesNewsData} from '../../types/LastesNews';
import NewsService from '../../services/NewsService';
import LatestNewsWidget from '../LatestNewsWidget/LatestNewsWidget';
import 'bootstrap/dist/css/bootstrap.css';
import './News.scss';
import '../../styles/index.scss';


export interface INewsProps{
    latestNews:ILastesNewsData[]
}

const News :React.FC<INewsProps>=(props:INewsProps)=>{
    
    const [news,setNews] = useState<INewsData[]>([]);
    const [featured,setFeatured]=useState<boolean>(true);
    const [latest,setLatest]=useState<boolean>(true);
    const handleClick=()=>(setFeatured(!featured));
    useEffect(()=>{
       
        NewsService.
        getAll()
        .then((res:any)=>{
            setNews(res.data.articles)
            console.log(res.data.articles)
        })
        .catch((e:Error)=>{
            console.log(e)
        })
       
        
    },[])
   
    return(
    <>
        <div className='buttons'>
            <button onClick={handleClick} className='featured-button'>Featured</button>
            <button className='latest-button'>Latest</button>

        </div>
        <div className='wrapper'>
                <div className='box-wraper'>
                        
                        {props.latestNews.map((n)=><NewsBox
                                key={n.id}
                                url={n.url}
                                id={n.id}
                                adx_keywords={n.adx_keywords}
                                byline={n.byline}
                                subsection={n.subsection}
                                column={n.column}
                                eta_id={n.eta_id}
                                title={n.title}
                                type={n.type}
                                abstract={n.abstract}
                                published_date={n.published_date}
                                source={n.source}
                                updated={n.updated}
                                section={n.section}  
                                multimedia={n.multimedia}
                                />)
                                }
                    </div> 
                    <div className='lastesNews-wrap'>   
                    <LatestNewsWidget news={news}></LatestNewsWidget>
                </div>
                
                
            </div>
    </>
    
 
    )
}
export default News;