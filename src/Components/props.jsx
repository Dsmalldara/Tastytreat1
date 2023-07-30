export  const Props = ({title,style,}) => {
  return (
    <div className={style}>
    {title}
    </div>
  )
}

export  const  ImageHead =({title, style,})=>{
    return (
        <div className={style}>
        <h1>{title}</h1>
        </div>
    )
}
export const SearchBox = ({placeholder, type, style, searchicon, value, onChange})=>{
  return (
    <div>
      <input type={type} placeholder={placeholder} className={style}  value={value} onChange={onChange}/>
      {/* {searchicon && (
    <div className='absolute inset-y-0 right-0 items-center  pr-12 text-slate-200 '>
   {searchicon}
    </div>)} */}
    </div>
  )
}
export const Icons=({style,icon})=>{
  return (
    <div className={style}>
    {icon}
    </div>
  )
}