import React from 'react'

const Post = ({params}:{
    params:{id?:string[]}
}) => {
    const data = params.id?.join('/') || 'No data'
  return (
    <div className='text-3xl'>{data}</div>
  )
}

export default Post