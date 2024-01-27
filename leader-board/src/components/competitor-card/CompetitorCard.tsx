
import React from 'react';
import { Badge, Competitor } from '../../models/models';
import RatioBar from './RatioBar';
import { BADGES } from '../../models/models';
import BadgesArea from './BadgesArea';

type CompetitorCardProps = {
    competitor: Competitor;
}


export default function CompetitorCard({ competitor }: CompetitorCardProps): JSX.Element {
    const { name, bio, avatar, wins, losses, popularity, badges } = competitor;
    let badgeObjects: Badge[] = badges.map(b => BADGES.find(badge => badge.code === b));
    if (badgeObjects === undefined) {
        badgeObjects = [];
    }
    const ratio = (100 * (wins / (wins + losses)));
    return (
        <>
            <div className='competitor-card'>
                <div className='avatar-wrapper'>
                    <img src={avatar} height={200} alt={name} />
                    <span className='name'>{name}</span>
                </div>
                <div className='bio'>{bio}</div>
                <div className='stats-wrapper'>
                    <div>win ratio: {wins}/{wins + losses} ({ratio.toFixed(2)}%)</div>
                    <RatioBar ratio={ratio} />
                    <BadgesArea badges={badgeObjects} />
                </div>
                <div>popularity: {popularity}</div>

            </div>
        </>
    )
}