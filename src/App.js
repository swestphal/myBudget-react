
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>

      <MainHeader title="My Budget" />

      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" color="green" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine isExpense description="S.th" value="$10,00" />
      <EntryLine description="S.th" value="$510,00" />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />

    </Container >
  );
}

export default App;
