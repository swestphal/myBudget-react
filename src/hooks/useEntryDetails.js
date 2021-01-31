import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addEntryRedux } from './../actions/entries.actions'

function useEntryDetails() {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0)
    const [isExpense, setIsExpense] = useState(false)
    const dispatch = useDispatch()

    const addEntry = () => {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        }))
        setDescription('');
        setValue('')
        setIsExpense('')
    }
    return {
        description, setDescription, value, setValue, isExpense, setIsExpense, addEntry
    }
}

export default useEntryDetails
