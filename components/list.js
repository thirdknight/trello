export default function List({ children, name }) {
  return (
    <div className="p-4 bg-slate-400 flex-1 rounded-md ">
      <h2 className="text-gray-900 font-bold mb-4">{name}</h2>
      {children}
    </div>
  )
}
