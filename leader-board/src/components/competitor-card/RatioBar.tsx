import React from 'react'

export default function RatioBar({ ratio }: { ratio: number }) {
    return (
        <div style={{ display: 'flex', height: '20px', width: '100%', borderRadius: '30px', overflow:'hidden' }}>
            <div
                style={{
                    width: `${ratio}%`, backgroundColor: '#33bb33'
                }}>
            </div>
            <div style={{ width: `${100 - ratio}%`, backgroundColor: 'rgb(234, 68, 68)' }}></div>
        </div>
    )
}
