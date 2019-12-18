import React from 'react'
import Container from './Container'
import { Box, Slider, TextField, Select, MenuItem } from '@material-ui/core'
import Checkbox from '../components/forms/LabeledCheckbox'
import MenuIcon from '@material-ui/icons/Menu'
import ExpandIcon from '@material-ui/icons/ExpandMore'

import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { Span } from '../components/Text'

export default { title: 'Forms' }

function toYears(value) {
  return `${value} years`
}

function toDollars(value) {
  return `$${value}k`
}

export const Sliders = () => (
  <Container>
    <Box m={10}>
      <Slider
        defaultValue={30}
        valueLabelDisplay="on"
        valueLabelFormat={toYears}
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>
    <Box m={10}>
      <Slider
        defaultValue={[30, 40]}
        valueLabelDisplay="on"
        valueLabelFormat={toDollars}
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>
  </Container>
)

export const Checkboxes = () => {
  const gilad = true
  const jason = false

  return (
    <Container>
      <Box m={5}>
        <Checkbox name="jason" value={jason} label="jason" />
      </Box>
      <Box m={5}>
        <Checkbox name="gilad" value={gilad} label="gilad" />
      </Box>
    </Container>
  )
}

const SortableItem = SortableElement(({ value }) => (
  <Box m={1}>
    <Checkbox
      name={value}
      label={
        <div style={{ pointer: 'move' }}>
          <span style={{ verticalAlign: 'middle' }}>{value}</span>
          <MenuIcon style={{ verticalAlign: 'middle', marginLeft: 25 }} />
        </div>
      }
    />
  </Box>
))

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  )
})

export const SortableCheckbox = () => {
  const [items, setItems] = React.useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ])

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex))
  }

  return (
    <Container>
      <Box m={10}>
        <SortableList items={items} onSortEnd={onSortEnd} />
      </Box>
    </Container>
  )
}

export const TextInputs = () => {
  return (
    <Container>
      <Box m={10}>
        <TextField label="Text Field" />
      </Box>
    </Container>
  )
}

export const SelectInputs = () => {
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Container>
      <Box m={10}>
        <Select value={age} onChange={handleChange} IconComponent={ExpandIcon}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Box>
    </Container>
  )
}

export const InlineSelect = () => {
  const [role, setRole] = React.useState(0)

  const handleChange = event => {
    setRole(event.target.value)
  }

  return (
    <Container>
      <Box m={10}>
        <Span>Please Select the</Span>
        <Select value={role} onChange={handleChange} IconComponent={ExpandIcon}>
          <MenuItem value={0}>Role</MenuItem>
          <MenuItem value={1}>Role 1</MenuItem>
          <MenuItem value={2}>Role 2</MenuItem>
        </Select>{' '}
        <Span>That You Want.</Span>
      </Box>
    </Container>
  )
}
