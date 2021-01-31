import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addEntryRedux } from './../actions/entries.actions'
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm() {

    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0)
    const [isExpense, setIsExpense] = useState(false)
    const dispatch = useDispatch()

    const addEntry = () => {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        }))
        setDescription('');
        setValue('')
        setIsExpense('')
    }
    return (
        <Form unstackable>
            <EntryForm addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
            <ButtonSaveOrCancel addEntry={addEntry} />
        </Form>
    )
}

export default NewEntryForm
