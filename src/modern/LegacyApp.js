import React, { Suspense } from 'react';
import { Route } from 'react-router-dom'
import { hasRouteBeenModernized } from './shared'
import lazyLegacyRoot from './lazyLegacyRoot';

const _LegacyApp = lazyLegacyRoot(() => import('../legacy/App'))

function Spinner() {
  return null;
}

export const LegacyApp = () => {
  return (
    <Suspense fallback={<Spinner />}>
      {/* legacy app */ ''}
      <Route render={({ location }) => {
        // if (hasRouteBeenModernized(location.pathname)) {
        //   return null
        // }

        // eslint-disable-next-line react/jsx-pascal-case
        return <_LegacyApp />
      }} />
    </Suspense>
  )
}
