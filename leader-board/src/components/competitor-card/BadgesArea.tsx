import React from 'react'
import { Badge } from '../../models/models'

export default function BadgesArea({ badges }: { badges: Badge[] }) {
    return (
        <div className='badges-area'>
            {badges.map(badge => {
                return (<div className='badge-wrapper' key={badge!.name} title={badge!.description}>
                    <div >
                        <img
                            style={{ width: '100px', height: '100px' }}
                            src={badge!.image}
                            alt='badge' />
                    </div>
                    <span className='badge-name'>{badge!.name}</span>


                </div>)
            }
            )}
        </div>
    )
}
