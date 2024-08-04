export default function TrackerColumn() {
  return (
    <div className="space-y-[2px]">
      {[0,1,2,3,4,5,6].map(() => (
        <div className="aspect-square bg-green-400 border border-green-300/80 rounded-[6px]" />
      ))}
    </div>
  )
}