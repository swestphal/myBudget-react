
import { Container, Grid, Segment, Icon, Statistic } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'

import './App.css';

import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';

function App() {
  return (
    <Container>

      <MainHeader title="My Budget" />


      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" color="green" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">S.th.</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" ></Icon>
              <Icon name="trash" ></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">S.th.</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" ></Icon>
              <Icon name="trash" ></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />

    </Container >
  );
}

export default App;
