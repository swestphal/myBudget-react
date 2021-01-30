

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
import { bindActionCreators, createStore } from 'redux'


function App() {
  const [entries, setEntries] = useState(initialEntries)

  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0)
  const [isExpense, setIsExpense] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const [entryId, setEntryId] = useState()

  const [incomeTotal, setIncomeTotal] = useState('')
  const [expenseTotal, setExpenseTotal] = useState('')
  const [total, setTotal] = useState('')

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
      setEntries(newEntries)
      setDescription('')
      resetEntry()
    }
    return () => {
      console.log("clean up")
    }
  }, [isOpen])


  //const store = createStore(rootReducer, composeWithDevTools( ));

  const store = createStore((state = initialEntries, action, composeWithDevTools) => {
    switch (action.type) {
      case 'ADD_ENTRY':
        //const newEntries = entries.concat({ id: 5, description: "hello", value: 100, isExpense: false })
        const newEntries = entries.concat({ ...action.payload })
        return newEntries;

        break;
      default:
        return state
    }

  })

  console.log("before", store.getState());

  const payload = { id: 5, description: "hello", value: 100, isExpense: false }
  store.dispatch({ type: 'ADD_ENTRY', payload: payload });

  console.log("after", store.getState());


  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense('')
  }
  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
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
    setEntries(result)
  }


  return (
    <Container>

      <MainHeader title="My Budget" />

      <DisplayBalance title="Your Balance:" value={total} size="small" color="green" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} isOpen={isOpen} setIsOpen={setIsOpen} editEntry={editEntry} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
      <ModelEdit isOpen={isOpen} setIsOpen={setIsOpen} addEntry={addEntry} addEntry={addEntry} description={description} value={value} isExpense={isExpense} setDescription={setDescription} setValue={setValue} setIsExpense={setIsExpense} />
    </Container >
  );
}

export default App;


const initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "1000",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "20",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "300",
    isExpense: true
  },
  {
    id: 4,
    description: "Power Bill",
    value: "50",
    isExpense: true
  }
]