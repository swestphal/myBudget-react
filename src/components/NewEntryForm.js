import React, { useState } from 'react'
import { Form, Radio } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
function NewEntryForm({ addEntry }) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(false)
    console.log(isExpense)
    return (
        <Form unstackable>
            <Form.Group >
                <Form.Input
                    icon="tags"
                    width="12"
                    label="Description"
                    placeholder="New shinny thing"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </Form.Input>
                <Form.Input
                    width={4}
                    label='Value'
                    placeholder='100.00'
                    icon="dollar"
                    iconPosition="left"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}>
                </Form.Input>

                <Form.Field
                    control={Radio}
                    label='Income'
                    value='1'
                    checked={isExpense === false}
                    onChange={() => setIsExpense(!isExpense)}
                />
                <Form.Field
                    control={Radio}
                    label='Expense'
                    value='2'
                    checked={isExpense === true}
                    onChange={() => setIsExpense(!isExpense)}
                />
            </Form.Group>

            <ButtonSaveOrCancel addEntry={addEntry} value={value} isExpense={isExpense} description={description} />
        </Form>
    )
}

export default NewEntryForm
