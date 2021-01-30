import React from 'react'
import EntryLine from './EntryLine';

function EntryLines({ entries, setIsOpen, editEntry }) {
    return (
        <>
            {
                entries.map((entry) => (
                    <EntryLine key={entry.id} {...entry} setIsOpen={setIsOpen} editEntry={editEntry} />
                ))
            }
        </>
    )
}

export default EntryLines
