import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine({ id, description, value, isExpense = false, deleteEntry }) {
    return (
        <Segment key={id} color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
                    <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" ></Icon>
                        <Icon name="trash" onClick={() => deleteEntry(id)}></Icon>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment >
    )
}

export default EntryLine
