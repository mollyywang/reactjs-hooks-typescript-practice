import { A } from "hookrouter"
import React from "react"

import { Login } from "@/pages/Login/Login"

const routes = {
  "/": () => (
    <h2>
      This is the homepage
      <br />
      <A href="/help">Help Page</A>
      <br />
      <A href="/login">Login Page</A>
    </h2>
  ),
  "/help": () => <h2>This is the help page</h2>,
  "/login": () => <Login />
}

export default routes
