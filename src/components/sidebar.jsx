import React, {useState} from 'react'
import { BsCurrencyDollar } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
    <>
        <div
            className={`w-[80%] md:w-[50%] fixed lg:static top-0 ${
                showSidebar ? "left-0" : "-left-full"
            } lg:w-80 h-full overflow-y-sroll text-gray-400 transition-all bg-[#181A20] p-4 shadow-2xl lg:shadow-none z-40`}
        >
        {/* Search */}
        <div className='bg-[#362C29]/50 rounded-xl p-4 mb-6'>
            <h4 className='mb-6 text-white text-lg'>Categories</h4>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='indy' class='accent-[#E58D27]'/>
                    <label htmlFor='indy'>Indy</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='Adventure' class='accent-[#E58D27]'/>
                    <label htmlFor='Adventure'>Adventure</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='MMO' class='accent-[#E58D27]'/>
                    <label htmlFor='MMO'>MMO</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='Casual Game' class='accent-[#E58D27]'/>
                    <label htmlFor='Casual Game'>Casual Game</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='Strategy' class='accent-[#E58D27]'/>
                    <label htmlFor='Strategy'>Strategy</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='Simulator' class='accent-[#E58D27]'/>
                    <label htmlFor='Simulator'>Simulator</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='Sport Game' class='accent-[#E58D27]'/>
                    <label htmlFor='Sport Game'>Sport Game</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='Action Game' class='accent-[#E58D27]'/>
                    <label htmlFor='Action Game'>Action Game</label>
                </div>
            </div>
            <h4 className='my-6 text-white text-lg'>Platforms</h4>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='PC' class='accent-[#E58D27]'/>
                    <label htmlFor='PC'>PC</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='PlayStation 5' class='accent-[#E58D27]'/>
                    <label htmlFor='PlayStation 5'>PlayStation 5</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='PlayStation 4' class='accent-[#E58D27]'/>
                    <label htmlFor='PlayStation 4'>PlayStation 4</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='Xbox Series' class='accent-[#E58D27]'/>
                    <label htmlFor='Xbox Series'>Xbox Series</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='Nintendo Switch' class='accent-[#E58D27]'/>
                    <label htmlFor='Nintendo Switch'>Nintendo Switch</label>
                </div>
            </div>
            <h4 className='my-6 text-white text-lg'>Price</h4>
            <form className='flex flex-col gab-8'>
                <div className='flex items-center justify-between gap-4'>
                    <div className='relative'>
                        <BsCurrencyDollar className='absolute left-2 top-1/2 -translate-y-1/2'/>
                        <input type="number" className='bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full'/>
                    </div>
                    <span>-</span>
                    <div className='relative'>
                        <BsCurrencyDollar className='absolute left-2 top-1/2 -translate-y-1/2'/>
                        <input type="number" className='bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full'/>
                    </div>
                </div>
                <button type='submit' className='bg-[#E58D27] text-black font-bold rounded-full w-full p-3 my-4 hover:-traslate-y-1 transition-all duration-200'>Apply Filter</button>
            </form>
        </div>
        {/* Social Media */}
        <ul className='flex items-center justify-between'>
            <li>
                <a href="https://www.twitter.com/" target="_blank" className='text-lg'>
                    <FaSquareXTwitter />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_blank" className='text-lg'>
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/" target="_blank" className='text-lg'>
                    <AiOutlineYoutube />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/" target="_blank" className='text-lg'>
                    <FaFacebookF />
                </a>
            </li>
        </ul>
        </div>
        {/*Button mobile*/}
        <button
            onClick={() => setShowSidebar(!showSidebar)}
            className='lg:hidden fixed bottom-4 right-4 bg-[#E58D27] p-4 rounded-full text-lg'
        >{showSidebar ? <MdClose /> : <CiFilter />}</button>
    </>
  )
}

export default Sidebar;
