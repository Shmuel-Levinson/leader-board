
import React from 'react';
import { Competitor } from '../../models/models';

type CompetitorCardProps = {
    competitor: Competitor;
}


export default function CompetitorCard({ competitor }: CompetitorCardProps): JSX.Element {
    const { name, bio, avatar, wins, losses, popularity, badges } = competitor;
    const ratio = (100 * (wins / (wins + losses))).toFixed(2);
    return (
        <>
            <div className='competitor-card'>
                <div className='avatar-wrapper'>
                    <img src={avatar} alt={name} />
                    <h1>{name}</h1>
                </div>
                <h3>{bio}</h3>
                <div>win ratio: {wins}/{wins + losses} ({ratio}%)</div>
                <div>popularity: {popularity}</div>
                <div>{badges.map(badge =>
                    <div>
                        <h4>{badge.name}</h4>
                    <img src={badge} alt='badge' />
                    </div>
                )}</div>
            </div>
        </>
    )
}