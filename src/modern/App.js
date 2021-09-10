import './App.css'
import { Provider } from '@dhis2/app-runtime'
import { HeaderBar } from '@dhis2/ui'
import React, { Suspense } from 'react'
import { Router } from 'react-router-dom'
import { LegacyApp } from './LegacyApp'
import { history } from './shared/history'

console.log('> React.version (src/modern/App.js)', React.version)

const appConfig = {
    baseUrl: 'https://debug.dhis2.org/dev',
    apiVersion: 33,
}

export default function App() {
  return (
    <Router history={history}>

      <Provider config={appConfig}>
        {/* modern app */ ''}
        <HeaderBar appName="Maintenance app" />
      </Provider>

      <Suspense fallback={<Spinner />}>
        {/* legacy app */ ''}
        <LegacyApp />
      </Suspense>
    </Router>
  );
}

function Spinner() {
  return null;
}
