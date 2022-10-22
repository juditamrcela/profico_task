import React from 'react';
import { useEffect,useState } from 'react';
import INewsData  from './../../types/News';
import NewsBox from '../NewsBox/NewsBox';
import {ILatestNewsData} from '../../types/LatestNews';
import NewsService from '../../services/NewsService';
import LatestNewsWidget from '../LatestNewsWidget/LatestNewsWidget';
import 'bootstrap/dist/css/bootstrap.css';
import './News.scss';
import '../../styles/index.scss';


export interface INewsProps{
    latestNews:ILatestNewsData[]
}

const News :React.FC<INewsProps>=(props:INewsProps)=>{
    
    const [news,setNews] = useState<INewsData[]>([]);
    const [isMobile,setIsMobile]=useState(window.innerWidth<1200)
    const [featured,setFeatured]=useState<boolean>(true);
    const [latest,setLatest]=useState<boolean>(false);
    const handleClick=()=>{
        setFeatured(true)
        setLatest(false)
    }
    const handleClickLatest=()=>{
        setLatest(true)
        setFeatured(false)
    }
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            const ismobile=window.innerWidth<1200;
            if(ismobile!==isMobile) {
                setIsMobile(ismobile);
            }
        },false)
    },[isMobile])
    useEffect(()=>{
       
        NewsService.
        getAll()
        .then((res:any)=>{
            
            setNews(res.data.articles)
            
        })
        .catch((e:Error)=>{
            console.log(e)
        })
       
        
    },[])
   
    return(
    <>
        <div className='buttons'>
            <button onClick={handleClick} className='featured-button'>Featured</button>
            <button onClick={handleClickLatest} className='latest-button'>Latest</button>

        </div>
        <div className='wrapper'>
                <div className={(isMobile && featured) ? 'mobile-screen-featured' : 'box-wraper'}>
                        
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
                    <div className={(isMobile && latest)? "mobile-screen-latest": "latestNews-wrap"}>   
                    <LatestNewsWidget news={news}></LatestNewsWidget>
                </div>
                
                
            </div>
    </>
    
 
    )
}
export default News;