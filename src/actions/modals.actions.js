export const openEditModal = (payload) => {
    return { type: 'OPEN_EDIT_MODAL', payload }
}

export const closeEditModal = () => {
    return { type: 'CLOSE_EDIT_MODAL' }
}