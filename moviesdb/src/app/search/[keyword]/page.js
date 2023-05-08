import React from 'react'
import Movies from '@/components/Movies'


const Page = async({params}) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a9ea55d574ee50cffc8d7586ac337c52&query=${keyword}&language=en-US&page=1&include_adult=false`)
    
    const veri= await res.json();

    console.log(veri,"veri")
    
  return (
    <div>
          {
            !veri?.results ?  <div className='text-center mt-20 text-xl font-bold'>We do not have this content</div> :
            <div className='flex items-center flex-wrap gap-3'>
                {
                veri?.results?.map((dt,i)=>(
               <Movies key={i} dt={dt}/>)) 
                }
                </div>
               
        }  
    </div>
  )
}

export default Page

