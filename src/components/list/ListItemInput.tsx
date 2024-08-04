'use client'

import { useState, useTransition } from "react";
import addListItem from "./actions";
import { Spinner } from "../ui/spinner";

export default function ListItemInput() {
  const [effect, setEffect] = useState(false)
  const [isPending, startTransition] = useTransition()

  const styles = effect ? "animate-_expand" : ""

  async function handleAddListItem(data: FormData) {
    startTransition(() => {
      addListItem(data)
    })
  }

  return (
    <form className="flex pt-2" action={(data) => handleAddListItem(data)} >
      <input
        className="grow bg-inherit text-inherit tracking-inherit border border-neutral-300 ring-2 ring-neutral-700 focus:ring-offset-[2px] outline-none px-2 py-1 translate-x-[2px] rounded-[8px] duration-200"
        id="title"
        name="title"
        placeholder="Clean dishes..." />

      <button
        className={`${styles} flex items-center justify-center bg-neutral-300 size-6 ring-[3px] ring-neutral-300 rounded-[8px] ml-[13px] hover:cursor-pointer hover:brightness-90 select-none`}
        type="submit"
        onClick={() => setEffect(true)}
        onAnimationEnd={() => setEffect(false)}>
          <div className="text-sm font-medium opacity-60"> 
            {!isPending ? "+" : <Spinner size={"xsmall"} />}
          </div>
      </button>
    </form>
  )
}