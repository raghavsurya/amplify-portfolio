import React, { ReactNode } from 'react';
import '../button.scss'

type PrimaryButtonProps = {
    text?: string,
    onClick: Function;
    className?: string;
    disable?: boolean;
    children?: ReactNode
}

export default function PrimaryButton(primaryButtonProps: PrimaryButtonProps) {
    const value = primaryButtonProps.text || primaryButtonProps.children;
    return (
        <button className={primaryButtonProps.disable ? `disable ${primaryButtonProps.className}` : primaryButtonProps.className}
            onClick={(e) => primaryButtonProps.onClick(e)}>{value}</button>
    )
}