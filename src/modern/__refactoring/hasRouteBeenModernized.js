const modernizedRoutes = [
  new RegExp(/^[/]edit[/].+/),
  new RegExp(/^[/]clone[/]/),
  new RegExp(/^[/]sqlViews[/]/),
]

export const hasRouteBeenModernized = route => {
  return !!modernizedRoutes.find(regExp => regExp.test(route))
}
