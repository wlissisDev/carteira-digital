import { MdClose } from "react-icons/md";

export function Form({ show, setShow }) {
    return (
        <div className={`bg-[#0005]  absolute w-full h-full grid place-content-center ${show ? "" : "hidden"}`}>
            <form className="bg-white p-4 rounded-md relative ">
                <button
                    onClick={() => setShow(false)}
                    type="button"
                    className="absolute right-2 top-2"
                >
                    <MdClose size={25} />
                </button>

                <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-2">
                        <label className="font-semibold text-gray-500">Despesa</label>
                        <input
                            name="account"
                            defaultChecked
                            type="radio" />
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="font-semibold text-gray-500">Receita</label>
                        <input
                            name="account"
                            type="radio" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mt-3 text-gray-500">Nome</label>
                    <input
                        className="border outline-none text-lg py-2 px-3 w-80 rounded-sm"
                        placeholder="Digite um nome para sua conta"
                        type="text" />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mt-3 text-gray-500">Valor</label>
                    <input
                     placeholder="Digite o valor da sua conta"
                        className="border outline-none  text-lg py-2 px-3 w-80 rounded-sm"
                        type="number" min={0} />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mt-3 text-gray-500">Data</label>
                    <input
                        className="border outline-none  text-lg py-2 px-3 w-80 rounded-sm"
                        type="date" />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mt-3 text-gray-500">Selecione a categoria</label>
                    <select
                        className="border outline-none  text-lg py-2 px-3 w-80 rounded-sm"
                        name="" id="">
                        <option value="">teste1</option>
                        <option value="">teste2</option>
                        <option value="">teste3</option>
                    </select>
                </div>



                <button
                    className="bg-orange-500 font-bold text-xl px-4 py-2 rounded-md mt-4"
                    type="submit"
                >Confirmar</button>

            </form>
        </div>
    )
}