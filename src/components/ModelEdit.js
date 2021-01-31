import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'
import { updateEntryRedux } from '../actions/entries.actions';
import { closeEditModal } from '../actions/modals.actions';
import useEntryDetails from '../hooks/useEntryDetails';
import EntryForm from './EntryForm'

function ModelEdit({ isOpen, id, value, description, isExpense }) {

    const dispatch = useDispatch();
    console.log(description)
    const entryUpdate = useEntryDetails(description, value, isExpense)
    console.log(entryUpdate)
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm description={entryUpdate.description} value={entryUpdate.value} isExpense={entryUpdate.isExpense} setDescription={entryUpdate.setDescription} setValue={entryUpdate.setValue} setIsExpense={entryUpdate.setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button primary onClick={() => entryUpdate.updateEntry(id)} > Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModelEdit
