export function Account() {
    return (
        <li className="flex justify-between p-4 rounded-md border shadow-inner my-3">
            <div className="flex flex-col">
                <h3 className="font-medium text-lg mb-3">Gasolida do mês</h3>
                <span className="font-light">Categoria: Transporte</span>
                <span className="font-light">Data: 00/00/0000</span>
            </div>
            <div className="flex flex-col justify-between">
                <span className="font-black text-xl">R$ 1000</span>
                <div>
                    <button>Deletar</button>
                    <button>Editar</button>
                </div>
            </div>
        </li>
    )
}