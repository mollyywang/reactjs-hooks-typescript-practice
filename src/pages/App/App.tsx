import { useRoutes } from "hookrouter"
import React from "react"

import routes from "@/routes"

export const App = () => {
  // TODO Add ErrorPage.tsx return routeResult || <NotFoundPage />
  const routesResult = useRoutes(routes)
  return <div>{routesResult}</div>
}
