import React from 'react'
import EntryLine from './EntryLine';

function EntryLines({ entries, deleteEntry, setIsOpen, editEntry }) {
    return (
        <>
            {
                entries.map((entry) => (
                    <EntryLine key={entry.id} {...entry} deleteEntry={deleteEntry} setIsOpen={setIsOpen} editEntry={editEntry} />
                ))
            }
        </>
    )
}

export default EntryLines
