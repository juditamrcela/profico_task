export interface Imultimedia{
    url:string;
    format:string;
    heigth:number;
    width:number;
    type:string;
    caption:string;

}
export  interface ILastesNewsData{
    url:string;
    adx_keywords:string;
    byline:string;
    subsection:string;
    column:string | null;
    eta_id:number | null;
    id:number | null;
    title:string;
    type:string;
    abstract:string;
    published_date:string;
    source:string;
    updated:string;
    section:string;
    multimedia:Imultimedia[];
        
    
    

    


}

