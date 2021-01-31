
import './App.css';

import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModelEdit from './components/ModelEdit';
import { useSelector } from 'react-redux'


function App() {

  const [incomeTotal, setIncomeTotal] = useState('')
  const [expenseTotal, setExpenseTotal] = useState('')
  const [total, setTotal] = useState('')

  const { isOpen, id } = useSelector((state) => state.modals)
  const entries = useSelector((state) => state.entries)
  const [entry, setEntry] = useState();

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        totalExpense += parseFloat(entry.value)
      } else {
        totalIncome += parseFloat(entry.value)
      }
    })


    setTotal(parseFloat(totalIncome) - parseFloat(totalExpense))
    setIncomeTotal(parseFloat(totalIncome));
    setExpenseTotal(parseFloat(totalExpense));

    return () => {

    }
  }, [entries])


  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
    console.log(entry)
  }, [isOpen, id])




  return (
    <Container>

      <MainHeader title="My Budget" />

      <DisplayBalance title="Your Balance:" value={total} size="small" color="green" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModelEdit isOpen={isOpen} {...entry} />
    </Container >
  );
}

export default App;

