
const reducer = (state = initialEntries, action) => {

    let newEntries;
    switch (action.type) {
        case 'ADD_ENTRY':
            //const newEntries = entries.concat({ id: 5, description: "hello", value: 100, isExpense: false })
            newEntries = state.concat({ ...action.payload })
            return newEntries;
        case 'REMOVE_ENTRY':
            newEntries = state.filter(entry => entry.id !== action.payload)
            return newEntries;
        default:
            return state
    }

}
export default reducer


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