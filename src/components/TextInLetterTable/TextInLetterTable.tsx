import * as React from 'react';

interface TextInLetterTableProps {
    children: string,
    debug?: boolean
}

export default function TextInLetterTable({children, debug}:TextInLetterTableProps) {
    return (<span style={debug ? {border: "1px solid red"}: undefined}>{children}</span>)
}