import React, {useState} from "react";
import { RiShoppingCartLine, RiHeart2Line } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return <header className="h-[7vh] lg:h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between bg-[#181A20] z-40">
        {/* Movile */}
        <button
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden text-2xl">
            <CiMenuBurger />
        </button>
        <div className={`fixed top-0 bg-[#181A20] w-full h-full z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
            <button onClick={() => setShowMenu(!showMenu)} className="text-3xl p-4"><IoMdClose /></button>
            <ul className="">
                <li>
                    <a href="#" className="block text-center p-4">Home</a>
                </li>
                <li>
                    <a href="#" className="block text-center p-4">Streams</a>
                </li>
                <li>
                    <a href="#" className="text-[#E58D27] block text-center p-4">Game store</a>
                </li>
                <li>
                    <a href="#" className="block text-center p-4">News</a>
                </li>
            </ul>
        </div>
        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-6">
            <li>
                <a href="#" className="hover:text-[#E58D27] transition-colors">Home</a>
            </li>
            <li>
                <a href="#" className="hover:text-[#E58D27] transition-colors">Streams</a>
            </li>
            <li>
                <a href="#" className="text-[#E58D27] transition-colors">Game store</a>
            </li>
            <li>
                <a href="#" className="hover:text-[#E58D27] transition-colors">News</a>
            </li>
        </ul>
        {/* User Menu */}
        <ul className="flex items-center gap-6 text-xl">
            <li>
                <button className="hover:text-[#E58D27] transition-colors"> <RiShoppingCartLine/> </button>
            </li>
            <li>
                <button className="hover:text-[#E58D27] transition-colors"> <RiHeart2Line/> </button>
            </li>
            <li>
                <button> <img src="https://img.freepik.com/foto-gratis/animada-entusiasta-decidida-sonriente-confiada-asiatica-lista-abordar-cualquier-tarea-cruzar-dedos-sobre-pecho-asertiva-segura-si-misma-sonriente-satisfecha-parece-profesional-fondo-blanco_176420-51110.jpg" className="w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]"/> </button>
            </li>
        </ul>
    </header>
}

export default Header;