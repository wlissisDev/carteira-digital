export function Account({name, value, date, category}) {
    return (
        <li className="flex justify-between p-4 rounded-md border shadow-inner my-3">
            <div className="flex flex-col">
                <h3 className="font-medium text-lg mb-3">{name}</h3>
                <span className="font-light">Categoria: {category}</span>
                <span className="font-light">Data: {date}</span>
            </div>
            <div className="flex flex-col justify-between">
                <span className="font-black text-xl">R$ {value}</span>
                <div>
                    <button>Deletar</button>
                    <button>Editar</button>
                </div>
            </div>
        </li>
    )
}