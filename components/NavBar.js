import Link from 'next/link'
import Pic from '../Logo/Stock-X-logos_transparent.png'
import Image from "next/image"
import { useRouter } from 'next/router';

 const NavBar = () => {
        const router = useRouter(); 
    return (
        <nav className="flex flex-wrap bg-black border-b-black-2 fixed inset-x-0">
                    
                    <div className="flex flex-grow max-w-5xl lg:max-w-full  mx-10 ">
       
       <Image 
       className="object-contain"
       src={Pic} 
       width={100} 
       height={100}
       
       />
       </div>
                    
            <ul className=" flex flex-grow justify-evenly items-center max-w-xs flex-wrap: nowrap text-xs text-white">     
       
        <li>
                 <div className=" flex flex-col group cursor-pointer font-semibold items-center w-12 sm:w-20 hover:text-red-600 ">    
                 <div  className=" h-5 mb-1 py-0 group-hover:animate-bounce">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                         <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg> 
                </div> 
                <Link classname=" opacity-100 text-xs group-hover:100 hover:opacity-100" href = "/"> HOME</Link>
                </div>
        </li>
      
        <li>
                <div className = " flex flex-col group cursor-pointer font-semibold items-center w-12 sm:w-20 hover:text-red-600 ">
                <div  className=" h-5 mb-1 py-0 group-hover:animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                         <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                         <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                        </svg>
                </div> 
        <div 
        onClick={() => router.push('/News/1')}>NEWS</div></div>
        </li>
      
        <li>
                <div className=" flex flex-col group cursor-pointer font-semibold items-center w-12 sm:w-20 hover:text-red-600 ">    
                <div  className=" h-5 mb-1 py-0 group-hover:animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                </svg>
                </div> 
                <Link classname=" opacity-100 text-xs group-hover:100 hover:opacity-100 whitespace-nowrap " href = "/About"> ABOUT US</Link> </div>
        </li>
    </ul>
    
    </nav>
  )
  }

   export default NavBar
/*  
        
        <HomeIcon className=" h-5 mb-1  group-hover:animate-bounce"/> 
        <NewspaperIcon className=" h-5 mb-1  group-hover:animate-bounce"/>
        <FireIcon className=" h-5 mb-1  group-hover:animate-spin "/>  
*/