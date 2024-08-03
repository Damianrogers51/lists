'use client'

import { useState } from "react"

export default function ListItem(props: {
  item: {
    id: number,
    title: string,
  }
}) {
  const [done, setDone] = useState(false)

  const styles = done ? "opacity-40" : "opacity-100"

  return (
    <div
      className={`${styles} flex text-neutral-800 items-center space-x-4 hover:cursor-pointer duration-200`}
      onClick={() => setDone((done) => !done)}>
        <div className="border-2 border-neutral-950 size-[16px] rounded-[6px] p-[2px] duration-200">
          {done && (
            <div className="size-full bg-neutral-950 rounded-[3px] animate-expand" />
          )}
        </div>

        <div> {props.item.title} </div>
    </div>
  )
}