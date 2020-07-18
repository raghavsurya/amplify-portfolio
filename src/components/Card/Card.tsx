import React, { ReactNode } from 'react';
import './Card.scss'

type CardProps = {

    children: ReactNode

}

export default function Card(cardProps: CardProps) {
    return (
        <div className="card">

            {cardProps.children}
        </div>
    )
}