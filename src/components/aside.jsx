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
        <div className="row-start-1 row-end-3 h-screen w-full p-8  flex flex-col justify-between border-r" >
            <div className="flex flex-col gap-6">
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
                className="text-white bg-slate-900 font-semibold text-lg px-6 py-3 rounded-md hover:bg-gray-800">Adicionar </button>
        </div>
    )
}