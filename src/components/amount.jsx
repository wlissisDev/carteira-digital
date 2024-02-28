export function Amount(){
    return(
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 h-max p-3 flex justify-center items-center gap-2 w-full">
            <div className="p-8 border rounded-md w-full bg-slate-900">
                <h3 className="text-xl font-semibold text-white">Despesa</h3>
                <span className="font-black text-2xl text-white">R$ 100</span>
            </div>
            <div className="p-8 border rounded-md w-full bg-slate-900">
                <h3 className="text-xl font-semibold text-white">Receita</h3>
                <span className="font-black text-2xl text-white">R$ 300</span>
            </div>
            <div className="p-8 border rounded-md w-full bg-orange-500">
                <h3 className="text-xl font-semibold ">Saldo</h3>
                <span className="font-black text-2xl ">R$ 200</span>
            </div>
        </div>
    )
}