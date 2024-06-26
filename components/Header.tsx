"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MenuIcon, FilterIcon, UsersIcon } from '@heroicons/react/outline';
import { usePathname ,useRouter} from 'next/navigation';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeUsers, setActiveUsers] = useState<number>(0);
  const currentPage = usePathname();
  const router=useRouter();
  const handleClickOutside = (event: any) => {
    if (!event.target.closest('.header')) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchActiveUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3003/activeusers');
        setActiveUsers(response.data.activeUsers);
      } catch (error) {
        console.error('Error fetching active users:', error);
      }
    };

    fetchActiveUsers();

    const intervalId = setInterval(fetchActiveUsers, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="bg-white shadow-md text-black py-4 px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center header">
      
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            <span className="text-yellow-500">Wave</span>
            <span className="text-green-500">Talks</span>
          </h1>
          <div className="h-5 w-5 bg-green-500 rounded-full ml-2 lg:ml-6 md:ml-3 animate-pulse"></div>
          <div className="flex ml-2 items-center">
            <UsersIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
            <h1 className="text-black text-sm sm:text-base ml-1">{activeUsers}</h1>
          </div>
          
        </div>
        {/* Menu Icon for Mobile */}
        <div className="lg:hidden ml-4">
          <button onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`lg:flex lg:items-center ${showMenu ? 'block' : 'hidden'} w-full lg:w-auto mt-4 lg:mt-0`}>
        <a href="#Call" className="block lg:inline-block mt-4 lg:mt-0 lg:mr-4 text-center lg:text-left hover:text-amber-700" onClick={(e:any)=>{
              if(currentPage=="/about")
                {
                  router.push('/');
                }
             
        }}>
          Video/Audio Chat
        </a>
        <a href="/about" className="block lg:inline-block mt-4 lg:mt-0 lg:mr-4 text-center lg:text-left hover:text-amber-700">
          About Us
        </a>
        <a href="#footer" className="block lg:inline-block mt-4 lg:mt-0 lg:mr-4 text-center lg:text-left hover:text-amber-700">
          Contact Us
        </a>
        
      </nav>
    </header>
  );
};

export default Header;
