
import { Container, Grid, Statistic, Segment, Icon } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'

import './App.css';

import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>

      <MainHeader title="My Budget" />

      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53:</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label stlye={{ textAlign: "left" }}>
                  Incoming
                </Statistic.Label>
                <Statistic.Value>1,045.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label stlye={{ textAlign: "left" }}>
                  Incoming
                </Statistic.Label>
                <Statistic.Value>623.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

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
