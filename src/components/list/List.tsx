import ListItem from "./ListItem"
import ListItemInput from "./ListItemInput"

import { SelectListItems } from "@/db/localdb"

export default function List(props: {
  listItems: SelectListItems
}) {
  return (
    <div className="inline-block bg-neutral-200 text-xs tracking-[-.25px] p-[2px] rounded-[42px]">
      <div className="flex items-center text-xs px-8 py-4">
        <h1 className="grow opacity-60"> August 1, 2022 </h1>

        <div className="relative size-[12px]">
          <div className="size-full bg-green-400/70 rounded-full" />
          <div className="absolute top-0 size-full bg-green-300 animate-ping rounded-full" /> 
        </div> 
      </div>

      <div className="relative inline-block bg-neutral-50 border border-neutral-300 p-10 space-y-4 rounded-[40px]">
        {props.listItems.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}

        <ListItemInput />
      </div>
    </div>
  )
}