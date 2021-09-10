import React from 'react'
import MenuCardsForSection from '../MenuCards/MenuCardsForSection.component'
import { initState } from './initState'

export class ListForGroup extends React.Component {
  componentDidMount() {
    initState(this.props.match)
  }

  render() {
    const { params } = this.props.match
    console.log('render ListForGroup', params)
    return <MenuCardsForSection params={params} />
  }
}
