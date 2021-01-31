

import { composeWithDevTools } from 'redux-devtools-extension';

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



  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0)
  const [isExpense, setIsExpense] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const [entryId, setEntryId] = useState()

  const [incomeTotal, setIncomeTotal] = useState('')
  const [expenseTotal, setExpenseTotal] = useState('')
  const [total, setTotal] = useState('')

  const entries = useSelector((state) => state.entries)

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
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index] = { ...newEntries[index], description, value, isExpense }
      //setEntries(newEntries)
      setDescription('')
      resetEntry()
    }
    return () => {
      console.log("clean up")
    }
  }, [isOpen])




  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense('')
  }


  const editEntry = (id) => {

    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense)
      setIsOpen(true)
      setEntryId(id)
    }
  }


  const addEntry = () => {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense })
    //setEntries(result)
  }


  return (
    <Container>

      <MainHeader title="My Budget" />

      <DisplayBalance title="Your Balance:" value={total} size="small" color="green" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} isOpen={isOpen} setIsOpen={setIsOpen} editEntry={editEntry} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
      <ModelEdit isOpen={isOpen} setIsOpen={setIsOpen} addEntry={addEntry} addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
    </Container >
  );
}

export default App;

