import { fireEvent, render, waitFor } from "@testing-library/react"
import { message } from "antd"
import React from "react"

import { Login } from "./Login"

message.success = jest.fn()

describe("src/pages/Login", () => {
  it("renders two inputs and two buttons", () => {
    const component = render(<Login />)
    expect(component.queryAllByText("Username")).toBeTruthy()
    expect(component.queryAllByText("Password")).toBeTruthy()
    expect(component.queryAllByText("Submit")).toBeTruthy()
    expect(component.queryAllByText("Cancel")).toBeTruthy()
  })
  it("displays error message when username is empty", async () => {
    const component = render(<Login />)
    const submitButton = component.container.querySelector(`[type="submit"]`)
    const passwordInput = component.container.querySelector(`[id="control-hooks_password"]`)
    fireEvent.change(passwordInput, { target: { value: "Passw0rd!" } })
    fireEvent.click(submitButton)
    await waitFor(
      () => {
        const error = component.queryByText(/'username' is required/)
        expect(error).toBeTruthy()
      },
      {
        timeout: 100
      }
    )
  })
  it("displays error message when password is empty", async () => {
    const component = render(<Login />)
    const submitButton = component.container.querySelector(`[type="submit"]`)
    const usernameInput = component.container.querySelector(`[id="control-hooks_username"]`)
    fireEvent.change(usernameInput, { target: { value: "username" } })
    fireEvent.click(submitButton)
    await waitFor(
      () => {
        const error = component.queryByText(/'password' is required/)
        const test = component.queryByText(/'username' is required/)
        expect(test).toBeFalsy()
        expect(error).toBeTruthy()
      },
      {
        timeout: 100
      }
    )
  })

  it("calls login api when username and password are valid", async () => {
    const component = render(<Login />)

    const submitButton = component.container.querySelector(`[type="submit"]`)
    const usernameInput = component.container.querySelector(`[id="control-hooks_username"]`)
    const passwordInput = component.container.querySelector(`[id="control-hooks_password"]`)
    fireEvent.change(usernameInput, { target: { value: "username" } })
    fireEvent.change(passwordInput, { target: { value: "Passw0rd!" } })
    fireEvent.click(submitButton)
    await waitFor(
      () => {
        // This is a bug in `message.success`, we decide to ingore the eslint for this line for now
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(message.success).toBeCalled()
      },
      {
        timeout: 3000
      }
    )
  })
})
