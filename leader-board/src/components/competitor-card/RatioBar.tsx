import React from 'react'

export default function RatioBar({ratio}: {ratio: number}) {
  return (
    <div style={{display:'flex', height: '20px', border: '1px solid black', width: '100%'}}>
        <div style={{width: `${ratio}%`, backgroundColor: 'green'}}></div>
        <div style={{width: `${100 - ratio}%`, backgroundColor: 'red'}}></div>
    </div>
  )
}
