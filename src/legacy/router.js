import React, { Component } from 'react';
import { Redirect, Router as OrigRouter, Route, Switch } from 'react-router-dom'
import { history } from './history'
import App from './App/App.component';
import { ListAll } from './router/ListAll.component.js'
import { OrganisationUnitList } from './router/OrganisationUnitList.component.js'
import { OrganisationUnitLevels } from './router/OrganisationUnitLevels.component.js'
import { ListForModelType } from './router/ListForModelType.component.js'
import { ListForGroup } from './router/ListForGroup.component.js'
import { EditForOrganisationUnitModel } from './router/EditForOrganisationUnitModel.component.js'
import { EditForOptionSetModel } from './router/EditForOptionSetModel.component.js'
import { EditForProgramModel } from './router/EditForProgramModel.component.js'
import { EditForModelSections } from './router/EditForModelSections.component.js'
import { EditForModalDataEntryForm } from './router/EditForModalDataEntryForm.component.js'
import { EditGroupModel } from './router/EditGroupModel.component.js'
import { CloneModel } from './router/CloneModel.component.js'
import { GroupEditor } from './router/GroupEditor.component.js'
import { OrganisationUnitSectionHierarchy } from './router/OrganisationUnitSectionHierarchy.component.js'
import { SqlViewModel } from './router/SqlViewModel.component.js'

// import { resetActiveStep } from './EditModel/stepper/stepper.actions';
// import { loadEventProgram } from './EditModel/event-program/actions';
// import LoadableComponent, { LoadableWithLoaders } from './utils/LoadableComponent';
// import EditModelContainer from './EditModel/EditModelContainer.component'

const routesWithoutSidebar = [
  new RegExp(/^[/]edit[/].+/),
  new RegExp(/^[/]clone[/]/),
  new RegExp(/^[/]sqlViews[/]/),
]

export const isRouteWithoutSidebar = route => {
  return !!routesWithoutSidebar.find(regExp => regExp.test(route))
}

const routesWithDisabledTabs = [
  new RegExp(/^[/]edit[/].+/),
  new RegExp(/^[/]clone[/]/),
  new RegExp(/^[/]sqlViews[/]/),
]

export const isRouteWithDisabledTabs = route => {
  return !!routesWithDisabledTabs.find(regExp => regExp.test(route))
}

export class Router extends Component {
  render() {
    return (
      <OrigRouter history={history}>
        <Route render={({ location, match }) => {
          const { params } = match

          return (
            <App
              params={params}
              hideSidebar={isRouteWithoutSidebar(location.pathname)}
              disableTabs={isRouteWithDisabledTabs(location.pathname)}
            >
              <Switch>
                <Route
                  path="/list/all"
                  component={ListAll}
                />

                <Route
                  path="/list/:groupName/organisationUnit"
                  component={OrganisationUnitList}
                />

                <Route
                  path="/list/:groupName/organisationUnitLevel"
                  component={OrganisationUnitLevels}
                />

                <Route
                  path="/list/:groupName/:modelType"
                  component={ListForModelType}
                />

                <Route
                  path="/list/:groupName"
                  component={ListForGroup}
                />

                <Route
                  path="/edit/:groupName/organisationUnit/:modelId"
                  component={EditForOrganisationUnitModel}
                />

                <Route
                  path="/edit/:groupName/optionSet/:modelId"
                  component={EditForOptionSetModel}
                />

                <Route
                  path="/edit/:groupName/program/:modelId"
                  component={EditForProgramModel}
                />

                <Route
                    path="/edit/:groupName/:modelType/:modelId/sections"
                    component={EditForModelSections}
                />

                <Route
                    path="/edit/:groupName/:modelType/:modelId/dataEntryForm"
                    component={EditForModalDataEntryForm}
                />

                <Route
                    path="/edit/:groupName/:modelType/:modelId"
                    component={EditGroupModel}
                />

                <Route
                    path="/clone/:groupName/:modelType/:modelId"
                    component={CloneModel}
                />

                <Route
                    path="/group-editor"
                    component={GroupEditor}
                />

                <Route
                    path="/organisationUnitSection/hierarchy"
                    component={OrganisationUnitSectionHierarchy}
                />

                <Route
                    path="/sqlViews/:modelId"
                    component={SqlViewModel}
                />

                <Route render={() => <Redirect to="/list/all" />} />
              </Switch>
            </App>
          )
        }} />
      </OrigRouter>
    )
  }
}
