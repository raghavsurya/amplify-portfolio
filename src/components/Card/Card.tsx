import React, { ReactNode } from 'react';
import './Card.scss'

type CardProps = {
    title: string,
    subText: string,
    datePublished?: string,
    children?: ReactNode

}

export default function Card(cardProps: CardProps) {
    return (
        <div className="card">
            {cardProps.title && <div className="title">
                {cardProps.title}
            </div>}
            {cardProps.datePublished && <div className="datePublished">
                {cardProps.datePublished}
            </div>}
            {cardProps.subText && <div className="subText">
                {cardProps.subText}
            </div>}
            {cardProps.children}
        </div>
    )
}