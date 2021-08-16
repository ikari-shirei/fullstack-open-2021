import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import numberService from './numberService'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const getPersons = () => {
    numberService.getAll().then((response) => {
      setPersons(response)
    })
  }

  useEffect(getPersons, [])

  const addPerson = (event) => {
    event.preventDefault()
    const isIncludePerson = persons.every((person) => person.name !== newName)

    const clearFormData = () => {
      setNewNumber('')
      setNewName('')
    }

    const isNewName = newName === ''

    if (!isNewName && isIncludePerson) {
      const newPerson = {
        name: newName,
        number: newNumber,
        // JSON server can't generate ID unless refresh the page
        id: persons[0] ? persons[persons.length - 1].id + 1 : 1,
      }

      setPersons(persons.concat(newPerson))
      numberService.create(newPerson)

      clearFormData()
    } else if (isNewName) {
      alert('Please enter a value')
    } else {
      const confirmMessage = `${newName} is already added to phonebook, replace the old number with the new one?`

      if (window.confirm(confirmMessage)) {
        const changedPerson = persons.find((person) => person.name === newName)
        const changedNumber = { ...changedPerson, number: newNumber }

        const id = changedNumber.id

        numberService
          .update(id, changedNumber)
          .then((updatedNumber) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : updatedNumber
              )
            )

            clearFormData()
          })
          .catch((e) => {
            const errorMessage = `the note '${changedNumber.name}' was already deleted from server`
            alert(errorMessage)
            setPersons(persons.filter((n) => n.id !== id))
          })
      }
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const handleDeleteButton = (event) => {
    const targetName = event.target.id

    if (window.confirm(`Delete ${targetName}?`)) {
      const newPersons = persons.filter((person) => person.name !== targetName)
      setPersons(newPersons)

      const targetObj = persons.find((person) =>
        person.name === targetName ? person : ''
      )

      numberService.deleteTarget(targetObj.id, targetObj)
    }
  }

  const personsToShow =
    newFilter === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} onClick={handleDeleteButton} />
    </div>
  )
}

export default App
