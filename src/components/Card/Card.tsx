import React, { ReactNode } from 'react';
import './Card.scss'

type CardProps = {

    className?: string
    children: ReactNode

}

export default function Card(cardProps: CardProps) {
    return (
        <div className="card">
            <div className={cardProps.className}>

                {cardProps.children}
            </div>
        </div>
    )
}