import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
function NewEntryForm({ addEntry }) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('')
    return (
        <Form unstackable>
            <Form.Group>
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
            </Form.Group>
            <ButtonSaveOrCancel addEntry={addEntry} value={value} description={description} />
        </Form>
    )
}

export default NewEntryForm
