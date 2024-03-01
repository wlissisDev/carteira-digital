import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


export function Account({ name, value, date, category, type,setArrayList }) {

    function handleDeleteAccount(){
        const data = JSON.parse(localStorage.getItem("accountList"));
        const newArray = data.filter(item=>item.name!==name)
        setArrayList(newArray)
        localStorage.setItem("accountList",JSON.stringify(newArray));
    }

    return (
        <li className="flex justify-between p-4 rounded-md border shadow-inner my-3">
            <div className="flex flex-col">
                <h3 className={`font-medium text-lg mb-3 capitalize`}>{name}</h3>
                <span className="font-light">Categoria: {category}</span>
                <span className="font-light">Data: {date}</span>
            </div>
            <div className="flex flex-col justify-between items-end">
                <span className={`font-black text-xl ${type === "despesa" ? "text-red-500" : "text-green-400"}`}>R$ {value}</span>
                <div className="flex gap-4">
                    <button 
                    className="hover:text-gray-600"
                    onClick={handleDeleteAccount}
                    >
                        <MdDelete size={25} />
                    </button>
                </div>
            </div>
        </li>
    )
}