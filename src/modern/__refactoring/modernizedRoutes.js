import { Button } from '@dhis2/ui'
import React from 'react'

const DataElementList = ({ location }) => (
  <div style={{ padding: '121px 16px 16px' }}>
    Yeah, new route!!!
    <br />
    {location.pathname}
    <br />
    <br />
    <Button primary>I am a @dhis2/ui button!</Button>
  </div>
)

// @TODO: Move config into react, once we don't need to maintain a list
// of modernized routes anymore
export const modernizedRoutes = [
  {
    path: '/list/dataElementSection/dataElement',
    component: DataElementList,
  }
]
