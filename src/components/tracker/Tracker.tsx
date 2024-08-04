import TrackerColumn from "./TrackerColumn";

export default function Tracker() {
  return (
    <div className="fixed left-0 right-0 bottom-0 py-16 px-52">
      <div className="border border-black rounded-[8px] p-1">
        <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[2px]">
          {Array(52).fill(0).map(() => (
            <TrackerColumn />
          ))}
        </div>
      </div>
    </div>
  )
}