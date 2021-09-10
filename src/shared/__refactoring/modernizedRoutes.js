import React from 'react'

const DataElementList = ({ location }) => (
  <div style={{ paddingTop: 121 }}>
    Yeah, new route!!!
    <br />
    {location.pathname}
  </div>
)

// @TODO: Move config into react, once we don't need to maintain a list
// of modernized routes anymore
export const modernizedRoutes = [
  {
    path: '/list/dataElementSection/dataElement',
    regExp: new RegExp('^/list/dataElementSection/dataElement$'),
    component: DataElementList,
  }
]
