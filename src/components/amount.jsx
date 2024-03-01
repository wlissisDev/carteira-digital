import { useEffect, useState } from "react"

export function Amount() {
    const [receita, setReceita] = useState(0);
    const [despesa, setDespesa] = useState(0);

    useEffect(() => {
        let receitaTotal = 0;
        let despesaTotal = 0;
        if(!localStorage.getItem("accountList")){
            return;
        }
        JSON.parse(localStorage.getItem("accountList"))
            .map(item => {
                if (item.type == "despesa") {
                    despesaTotal = despesaTotal + item.value
                } else {
                    receitaTotal = receitaTotal + item.value
                }
            })
        setDespesa(despesaTotal);
        setReceita(receitaTotal);
    }, [localStorage.getItem("accountList")])

    return (
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 h-max p-3 flex  justify-center items-center gap-2 w-full">
            <div className="p-8 border rounded-md w-full bg-slate-900">
                <h3 className="text-xl font-semibold text-white">Despesa</h3>
                <span className="font-black text-2xl text-white">R$ {despesa}</span>
            </div>
            <div className="p-8 border rounded-md w-full bg-slate-900">
                <h3 className="text-xl font-semibold text-white">Receita</h3>
                <span className="font-black text-2xl text-white">R$ {receita}</span>
            </div>
            <div className={`p-8 border rounded-md w-full  ${receita - despesa < 0 ? "bg-red-400" : "bg-green-400"}`}>
                <h3 className="text-xl font-semibold ">Saldo</h3>
                <span className={`font-black text-2xl `}>R$ {receita - despesa}</span>
            </div>
        </div>
    )
}