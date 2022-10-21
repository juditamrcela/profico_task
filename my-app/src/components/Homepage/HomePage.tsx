import React, { useEffect } from "react";
import { useState } from "react";
import { Input,Form } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import News from "../News/News";
import Sidebar from "../Sidebar/Sidebar";
import './HomePage.scss';
import NewsService from "../../services/NewsService";
import { ILastesNewsData } from "../../types/LastesNews";
import { useParams } from "react-router-dom";


const HomePage:React.FC=()=>{
    const {id}=useParams();
    const [search,setSearch]=useState<string>("")
    
    const [latestNews,setLatestNews]=useState<ILastesNewsData[]>([]);
    const [filteredLastesNews,setFilteredLastesNews]=useState<ILastesNewsData[]>([]);
    const [favoriteItems,setFavoriteItems]=useState([]);
    const searchItems=(searchItem:string)=>{
        setSearch(searchItem)
       
        console.log(filteredLastesNews)
        const filteredNews:ILastesNewsData[]=filteredLastesNews.filter((item)=>{
            if(searchItem===""){
               return item
            }
            else{
                return item.title.toLowerCase().includes(search.toLowerCase())
            }
           
            
        })
        console.log(filteredNews)
        setLatestNews(filteredNews)
       
    }
    useEffect(()=>{
        NewsService.getAllNewsCategory("home")
        .then((res:any)=>{
            setLatestNews(res.data.results)
           setFilteredLastesNews(res.data.results)
            console.log(res.data.results)
        })
        .catch((e:Error)=>{
            console.log(e)
        })

       
        
    },[])
    useEffect(()=>{
        if(id){
            if(id=="favorites"){
                // const favoritesLocalStorage:string=localStorage.getItem("favorites")
                // const value=JSON.parse(favoritesLocalStorage)


            }else{

                NewsService.getAllNewsCategory(id)
            .then((res:any)=>{
                setLatestNews(res.data.results)
                console.log(res.data.results)
            })
            .catch((e:Error)=>{
                console.log(e)
            })
            }
            
        }
        else{
            NewsService.getAllNewsCategory("home")
            .then((res:any)=>{
                setLatestNews(res.data.results)
                console.log(res.data.results)
            })
            .catch((e:Error)=>{
                console.log(e)
            })
        }
       
    },[id])
   
    return (
        
        <div className="main-wrapper">
            <Sidebar></Sidebar>
            <div className="row">
                <div className="col-md-2 sm-1">
                    <span className="h1-red">My</span><span className="h1-black">News</span>
                </div>
                <div className="col-md-7 sm-8">
                    <Form>
                        <Form.Item className="searchInput">
                            <Input  placeholder="Search News" onChange={(e)=>searchItems(e.target.value)}  />
                            
                        </Form.Item>
                    </Form>
                </div>
                {latestNews ? <News latestNews={latestNews}></News> : null}
            </div>
            


        </div>

    );

}
export default HomePage;