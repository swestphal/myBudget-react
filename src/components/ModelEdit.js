import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'
import { closeEditModal } from '../actions/modals.actions';
import EntryForm from './EntryForm'

function ModelEdit({ isOpen, setIsOpen, value, description, isExpense, setIsExpense, setValue, setDescription }) {
    const dispatch = useDispatch();

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button primary onClick={() => setIsOpen(false)}>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModelEdit
