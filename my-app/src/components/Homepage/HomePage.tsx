import React, { useEffect } from "react";
import { useState } from "react";
import { Input,Form } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import News from "../News/News";
import Sidebar from "../Sidebar/Sidebar";
import './HomePage.scss';
import NewsService from "../../services/NewsService";
import { ILatestNewsData } from "../../types/LatestNews";
import { useParams } from "react-router-dom";
import { AiOutlineConsoleSql } from "react-icons/ai";


const HomePage:React.FC=()=>{
    const {id}=useParams();
    const [search,setSearch]=useState<string>("")
    
    const [latestNews,setLatestNews]=useState<ILatestNewsData[]>([]);
    const [filteredLastesNews,setFilteredLastesNews]=useState<ILatestNewsData[]>([]);
    const [favoriteItems,setFavoriteItems]=useState([]);
    const searchItems=(searchItem:string)=>{
        setSearch(searchItem)
       
        console.log(filteredLastesNews)
        const filteredNews:ILatestNewsData[]=filteredLastesNews.filter((item)=>{
            if(searchItem===""){
               return item
            }
            else{
                return item.title.toLowerCase().includes(search.toLowerCase())
            }
           
            
        })
        
        setLatestNews(filteredNews)
       
    }
    useEffect(()=>{
        NewsService.getAllNewsCategory("home")
        .then((res:any)=>{
            const response=res.data.results;
            setLatestNews(response.sort((a:ILatestNewsData, b:ILatestNewsData) => a.section.localeCompare(b.section)))
            setFilteredLastesNews(response.sort((a:ILatestNewsData, b:ILatestNewsData) => a.section.localeCompare(b.section) || b.published_date.localeCompare(a.published_date)))
            console.log(response)
        })
        .catch((e:Error)=>{
            console.log(e)
        })

       
        
    },[])
    useEffect(()=>{
        if(id){
            if(id=="favorites"){
                
                const favoritesLocalStorage:string|null=localStorage.getItem("favorites")
                if(favoritesLocalStorage){
                    const value:ILatestNewsData[]=JSON.parse(favoritesLocalStorage)
                    setLatestNews(value.sort((a:ILatestNewsData, b:ILatestNewsData) => a.section.localeCompare(b.section) || b.published_date.localeCompare(a.published_date) ))
                }
                else{
                    setLatestNews([])
                }
                


            }
            else{

                NewsService.getAllNewsCategory(id)
            .then((res:any)=>{
                const response=res.data.results;
                setLatestNews(response.sort((a:ILatestNewsData, b:ILatestNewsData) => a.section.localeCompare(b.section) || b.published_date.localeCompare(a.published_date)))
                
            })
            .catch((e:Error)=>{
                console.log(e)
            })
            }
            
        }
        else{
            NewsService.getAllNewsCategory("home")
            .then((res:any)=>{
                const response=res.data.results;
                setLatestNews(response.sort((a:ILatestNewsData, b:ILatestNewsData) => a.section.localeCompare(b.section)))
                
                
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
                <hr className="line"></hr>
                <h5 className="title">News</h5>
                {latestNews ? <News latestNews={latestNews}></News> : null}
            </div>
            
            


        </div>

    );

}
export default HomePage;