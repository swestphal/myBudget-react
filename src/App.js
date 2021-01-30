
import { Container } from 'semantic-ui-react';
import './App.css';
import { useState, useEffect } from 'react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModelEdit from './components/ModelEdit';



function App() {
  const [entries, setEntries] = useState(initialEntries)

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const [entryId, setEntryId] = useState()

  //clear modalentries
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

    }
  }, [isOpen])

  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense('')
  }
  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    console.log(result)
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

      <DisplayBalance title="Your Balance:" value="2,550.53" size="small" color="green" />
      <DisplayBalances />

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
    value: "$1000,00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "$20,00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "$300,00",
    isExpense: true
  },
  {
    id: 4,
    description: "Power Bill",
    value: "$50,00",
    isExpense: true
  }
]