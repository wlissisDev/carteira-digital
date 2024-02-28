import { useState } from "react";
import { Account } from "./components/account";
import { Amount } from "./components/amount";
import { Aside } from "./components/aside";
import { Form } from "./components/form";

export function App() {
  const [show, setShow] = useState(false);
  const [arrayList, setArrayList] = useState([]);



  return (
    <div className="grid grid-cols-person grid-rows-person w-screen h-screen relative">
      <Form
        show={show}
        setShow={setShow}
        setArrayList={setArrayList}
        arrayList={arrayList}
      />
      <Aside setShow={setShow} />
      <Amount />
      <div className="overflow-scroll">
        <h3 className="text-lg ml-3 font-semibold">Todas as notas</h3>
        <div className="flex gap-3 p-3">
          <ul className="flex-1">
            <Account />
            <Account />
            <Account />
          </ul>

          <ul className="flex-1">
            <Account />
            <Account />
            <Account />
            <Account />
          </ul>
        </div>
      </div>
    </div>
  )
}

