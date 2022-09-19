import Image from "next/image"

export default function Card({text}) {
  return (
    <div className='bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-3'>
      <div className='flex justify-between'>
        <p className="font-medium">{text}</p>
        <Image src="/static/icons/edit.svg" width={32} height={32} alt="" />
      </div>
      <div className='flex justify-between'>
        <Image src="/static/images/test.png" width={32} height={32} alt="foto" />
        <Image src="/static/icons/square.svg" width={32} height={32} alt="" />
      </div>

    </div>
  )
}
