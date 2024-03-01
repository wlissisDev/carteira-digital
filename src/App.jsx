import { useEffect, useState } from "react";
import { Account } from "./components/account";
import { Amount } from "./components/amount";
import { Aside } from "./components/aside";
import { Form } from "./components/form";



export function App() {
  const [show, setShow] = useState(false);
  const [arryDespesa, setArrayDespesa] = useState([]);
  const [arryReceita, setArrayReceita] = useState([]);

  const [title, setTitle] = useState("Todos");

  const [arrayList, setArrayList] = useState(() => {
    if (localStorage.getItem("accountList")) {
      return JSON.parse(localStorage.getItem("accountList"));
    }
    return [];
  });

  useEffect(() => {
    setArrayDespesa(arrayList.filter(item => item.type === "despesa"));
    setArrayReceita(arrayList.filter(item => item.type === "receita"));
  }, [arrayList])


  return (
    <div className=" md:grid md:grid-cols-person md:grid-rows-person  md:w-screen md:h-screen relative">
      <Form
        show={show}
        setShow={setShow}
        arrayList={arrayList}
        setArrayList={setArrayList}
      />
      <Aside
        setArrayDespesa={setArrayDespesa}
        setArrayReceita={setArrayReceita}
        setShow={setShow}
        setTitle={setTitle}
      />
      <Amount />
      <div className="overflow-scroll">
        <h3 className="text-lg ml-3 font-semibold capitalize">{title}</h3>
        <div className="md:flex gap-3 p-3">
          <ul className="flex-1">
            {
              arryReceita?.map((item, index) => {
                return (
                  <Account key={index}
                    name={item.name}
                    category={item.category}
                    date={item.date}
                    value={item.value}
                    type={item.type}
                    setArrayList={setArrayList}
                  />
                )
              })
            }
          </ul>

          <ul className="flex-1">
            {
              arryDespesa?.map((item, index) => {
                return (
                  <Account key={index}
                    name={item.name}
                    category={item.category}
                    date={item.date}
                    value={item.value}
                    type={item.type}
                    setArrayList={setArrayList}
                  />
                )
              })
            }

          </ul>
        </div>
      </div>
    </div>
  )
}

