import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
function NewEntryForm({ addEntry }) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(false)

    return (
        <Form unstackable>

            <EntryForm addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
            <ButtonSaveOrCancel addEntry={addEntry} value={value} isExpense={isExpense} description={description} />
        </Form>
    )
}

export default NewEntryForm
