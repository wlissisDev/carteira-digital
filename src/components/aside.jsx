import { RiMentalHealthFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaSkating } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";




export function Aside({setShow}) {
    return (
        <div className="row-start-1 row-end-3 h-screen w-full p-8  flex flex-col justify-between border-r" >
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <FaCar/>
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Tranporte</span>
                </div>
                <div className="flex items-center gap-3">
                    <IoFastFood/>
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Alimentação</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaSkating/>
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Lazer</span>
                </div>
                <div className="flex items-center gap-3">
                    <RiMentalHealthFill/>
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Saúde</span>
                </div>
                <div className="flex items-center gap-3">
                    <MdMoreVert/>
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Outros</span>
                </div>
            </div>
            <button 
            onClick={()=>setShow(true)}
            className="text-white bg-slate-900 font-semibold text-lg px-6 py-3 rounded-md">Adicionar </button>
        </div>
    )
}