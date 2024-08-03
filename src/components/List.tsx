import ListItem from "./ListItem"

const LIST_ITEMS = [
  {
    id: 0,
    title: 'Read 10 Pages'
  },
  {
    id: 1,
    title: 'Push Code to Github'
  },
  {
    id: 2,
    title: 'Write/ Tweet'
  },
  {
    id: 3,
    title: 'Spend Time With Family'
  },
]

export default function List() {
  return (
    <div className="inline-block bg-neutral-200 text-xs tracking-[-.25px] p-[2px] rounded-[42px]">
      <div className="flex items-center text-xs px-8 py-4">
        <h1 className="grow opacity-60"> August 1, 2022 </h1>

        <div className="relative size-[12px]">
          <div className="size-full bg-green-400/80 rounded-full" />
          <div className="absolute top-0 size-full bg-green-300 animate-ping rounded-full" /> 
        </div> 
      </div>

      <div className="relative inline-block bg-neutral-100 border border-neutral-300 p-10 space-y-4 rounded-[40px]">
        {LIST_ITEMS.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}