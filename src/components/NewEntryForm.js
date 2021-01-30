import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
function NewEntryForm({ addEntry, value, description, isExpense, setIsExpense, setValue, setDescription }) {


    return (
        <Form unstackable>

            <EntryForm addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
            <ButtonSaveOrCancel addEntry={addEntry} value={value} isExpense={isExpense} description={description} />
        </Form>
    )
}

export default NewEntryForm
