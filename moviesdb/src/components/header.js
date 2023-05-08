"use client"
import React from 'react'
import '../app/globals.css'
import {BiSearch} from 'react-icons/bi'
import MenuItem from '@/components/MenuItem.js'
import ThemeComp from '@/components/ThemeComp.js'
import {useState}  from 'react'
import {useRouter} from 'next/navigation'

const Header = () => {
    const [keyword, setKeyword] = useState('')
    const router = useRouter();
    const menu=[
        {
            name :"About",
            url:"/about"
        },
        {
            name :"Sign In",
            url:"/login"
        }
    ]
    

    const searchFunc = (e) => {
        if(e.key === 'Enter' && keyword.length >= 3){
            router.push(`/search/${keyword}`)
            setKeyword('')
        }

    }
  return (
    <div className='flex items-center  gap-7 h-20 p-5'>
        <div className='rounded-lg bg-amber-600  p-3 text-2xl font-bold'>Best Movies</div>
        <div className='flex items-center flex-1  gap-2 border p-3 w-100 '>
            <input value={keyword} onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} placeholder='Find a Movie!' className='outline-none flex-1 bg-transparent' type="text" />
            <BiSearch size={25}/>
        </div>

         
       <div>
        <ThemeComp/>
       </div>

     
       { menu.map((mn, i) => (
        
        <MenuItem mn={mn} key={i}/>

        ))}
        
    </div>
  )
}

export default Header