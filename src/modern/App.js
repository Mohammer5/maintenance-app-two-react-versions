import './App.css'
import { HeaderBar } from '@dhis2/ui'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { modernizedRoutes } from './shared'
import { AppWrapper } from './appWrapper'
import { Navigation } from './components'
import { LegacyApp } from './LegacyApp'
import {
    getAppDataError,
    getAppLoading,
    getAppReady,
    loadAppData,
} from './redux'
import { modernizedRoutes as modernModernizedRoutes } from './__refactoring'

const App = () => {
  const dispatch = useDispatch()
  const appReady = useSelector(getAppReady)
  const appLoading = useSelector(getAppLoading)
  const appError = useSelector(getAppDataError)

  useEffect(() => {
      if (!appLoading && !appReady && !appError) {
          dispatch(loadAppData())
      }
  }, [appLoading, appReady, appError, dispatch])

  if (appError) {
      return appError.toString()
      // return <Error error={appError} />
  }

  if (!appReady) {
      return 'Loading...'
      // return <Loading />
  }

  return (
    <>
      {/* modern app */ ''}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: 48, zIndex: 2 }}>
        <HeaderBar appName="Maintenance app" />
        <Navigation />
      </div>

      <AppWrapper>
        {modernizedRoutes.map(({ path }) => {
          const { component } = modernModernizedRoutes.find(
            modernizedRoute => {
              if (modernizedRoute.path === path) {
                return modernizedRoute.component
              }
            }
          )

          return (
            <Route key={path} path={path} component={component} />
          )
        })}
      </AppWrapper>

      <LegacyApp />
    </>
  )
}

export default function() {
  return (
    <AppWrapper>
      <App />
    </AppWrapper>
  )
}
