export default interface ISource{
    id?:any| null;
    name?:string | null;
}
export default interface INewsData{
    source:{
        id?:any | null,
        name:string
    };
    author:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    content:string;
}