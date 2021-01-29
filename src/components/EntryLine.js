import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import ModalEdit from './ModelEdit'
function EntryLine({ id, description, value, isExpense = false, deleteEntry }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Segment key={id} color={isExpense === true ? 'red' : 'green'}>
                <Grid columns={3} textAlign="right">
                    <Grid.Row>
                        <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
                        <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="edit" onClick={() => setIsOpen(true)}></Icon>
                            <Icon name="trash" onClick={() => deleteEntry(id)}></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment >
            <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default EntryLine
