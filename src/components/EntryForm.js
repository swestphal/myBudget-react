import React from 'react'

import { Form, Radio } from 'semantic-ui-react';

function EntryForm({ description, value, isExpense, setDescription, setValue, setIsExpense }) {
    return (
        <>
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
        </>
    )
}

export default EntryForm
