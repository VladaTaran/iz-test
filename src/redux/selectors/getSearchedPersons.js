const getSearchedPersons = (persons, text) => {
    return text === '' ? persons :
        persons.filter(person => {
            return Object.values(person)
                         .join(' ')
                         .toLowerCase()
                         .includes(text.toLowerCase()) && person 
    })
}
export default getSearchedPersons;