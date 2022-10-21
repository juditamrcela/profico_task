import http from '../http-common';
import {ILastesNewsData} from '../types/LastesNews';
import INewsData from '../types/News';

const getAll=async ()=>{
    return await http.get<Array<INewsData>>("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fddc8388c2d8408bb82850d9720e20e9")
}
const getAllNewsCategory=async(category:string)=>{
    return await http.get<ILastesNewsData>(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=dvZefV16mWNkjqVkbunf3PtG90qLxJ8K`)
}

const NewsService= { getAll,getAllNewsCategory};

export default NewsService