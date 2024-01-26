
import React from 'react';
import { Competitor } from '../models/models';

type CompetitorCardProps = {
    competitor: Competitor;
}


export default function CompetitorCard({ competitor }: CompetitorCardProps): JSX.Element {
    const { name, bio, avatar, wins, losses } = competitor;
    const ratio = (100 * (losses / wins)).toFixed(2);
    return (
        <>
            <div className='competitor-card'>
                <h2>{name}</h2>
                <img width={75} src={avatar} alt={name} />
                <h3>{bio}</h3>
                <div>win/loss: {losses}/{wins} ({ratio}%)</div>
            </div>
        </>
    )
}