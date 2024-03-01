import { useState } from "react";
import { MdClose } from "react-icons/md";

export function Form({ show, setShow, setArrayList, arrayList }) {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("transporte");
    const [type, setType] = useState("despesa");


    function handleSubmit(event) {
        event.preventDefault();

        localStorage.setItem("accountList", JSON.stringify([{ name, value, category, type, date }, ...arrayList]));
        setArrayList(JSON.parse(localStorage.getItem("accountList")));


        setName("");
        setValue("");
        setDate("");
    }

    return (
        <div className={`bg-[#0005]  absolute md:w-full h-[100vh] w-screen md:h-full grid place-content-center md:py-auto py-2 ${show ? "" : "hidden"}`}>
            <form
                className="bg-white p-4 rounded-md md:h-auto h-screen relative"
                onSubmit={handleSubmit}
            >
                <button
                    onClick={() => setShow(false)}
                    type="button"
                    className="absolute right-2 top-2 "
                >
                    <MdClose size={25} />
                </button>

                <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2">
                        <label htmlFor="despesa" className="font-semibold cursor-pointer text-gray-500">Despesa</label>
                        <input
                            defaultChecked
                            id="despesa"
                            onClick={() => setType("despesa")}
                            name="account"
                            type="radio"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="receita" className="font-semibold cursor-pointer text-gray-500">Receita</label>
                        <input
                            onClick={() => setType("receita")}
                            id="receita"
                            name="account"
                            type="radio" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mt-3 text-gray-500">Nome</label>
                    <input
                        className="border outline-none text-lg py-2 px-3 w-96 rounded-sm"
                        placeholder="Digite um nome para sua conta"
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mt-3 text-gray-500">Valor</label>
                    <input
                        placeholder="Digite o valor da sua conta"
                        className="border outline-none  text-lg py-2 px-3 w-96 rounded-sm"
                        type="number" min={0}
                        required
                        onChange={(e) => setValue(parseInt(e.target.value))}
                        value={value}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mt-3 text-gray-500">Data</label>
                    <input
                        className="border outline-none  text-lg py-2 px-3 w-96 rounded-sm"
                        type="date"
                        required
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold mt-3 text-gray-500">Selecione a categoria</label>
                    <select
                        className="border outline-none  text-lg py-2 px-3 w-96 rounded-sm"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="transporte">Transporte</option>
                        <option value="saude">Saúde</option>
                        <option value="alimentacao">Alimentação</option>
                        <option value="lazer">Lazer</option>
                        <option value="outro">Outro</option>
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