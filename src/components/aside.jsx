import { RiMentalHealthFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaSkating } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";




export function Aside({ setShow, setTitle, setArrayDespesa, setArrayReceita }) {

    function handleSetCategory(category) {
        const data = JSON.parse(localStorage.getItem("accountList"));
        setTitle(category)
        setArrayDespesa(data.filter(item => item.category === category && item.type === "despesa"));
        setArrayReceita(data.filter(item => item.category === category && item.type === "receita"));
    }

    function handleGetAllAccounts() {
        const data = JSON.parse(localStorage.getItem("accountList"));
        setTitle("Todas as contas")
        setArrayDespesa(data.filter(item => item.type === "despesa"));
        setArrayReceita(data.filter(item => item.type === "receita"));
    }

    return (
        <div className="md:row-start-1 md:row-end-3 md:h-screen md:w-full p-8  flex flex-col md:justify-between items-center  md:border" >
            <div className="flex items-center md:items-start md:flex-col flex-wrap md:gap-6 gap-3">
                <button
                    className="flex items-center gap-3 hover:text-orange-500 w-min "
                    onClick={handleGetAllAccounts}
                >
                    <MdMoreVert />
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Todos</span>
                </button>
                <button
                    className="flex items-center gap-3 hover:text-orange-500 w-min "
                    onClick={() => handleSetCategory("transporte")}
                >
                    <FaCar />
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Tranporte</span>
                </button>
                <button
                    className="flex items-center gap-3 hover:text-orange-500 w-min "
                    onClick={() => handleSetCategory("alimentacao")}
                >
                    <IoFastFood />
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Alimentação</span>
                </button>
                <button
                    className="flex items-center gap-3 hover:text-orange-500 w-min "
                    onClick={() => handleSetCategory("lazer")}
                >
                    <FaSkating />
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Lazer</span>
                </button>
                <button
                    className="flex items-center gap-3 hover:text-orange-500 w-min "
                    onClick={() => handleSetCategory("saude")}
                >
                    <RiMentalHealthFill />
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Saúde</span>
                </button>
                <button
                    className="flex items-center gap-3 hover:text-orange-500 wmin "
                    onClick={() => handleSetCategory("outro")}

                >
                    <MdMoreVert />
                    <span className="text-lg font-semibold my-3 text-black cursor-pointer hover:text-orange-500">Outros</span>
                </button>
            </div>
            <button
                onClick={() => setShow(true)}
                className="text-white bg-slate-900 w-1/2 md:w-full mt-5 md:mt-0 font-semibold text-lg px-6 py-3 rounded-md hover:bg-gray-800">Adicionar </button>
        </div>
    )
}