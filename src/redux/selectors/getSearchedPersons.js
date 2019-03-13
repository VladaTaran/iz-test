const getSearchedPersons = (persons, text) => {
    // console.log('update persons ', persons)
    return text === '' ? persons :
        persons.filter(person => {
            return Object.values(person)
            .join(' ')
            .toLowerCase()
            .includes(text.toLowerCase()) && person 
    })
}
export default getSearchedPersons;