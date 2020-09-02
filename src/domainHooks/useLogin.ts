import { useRequest } from "@umijs/hooks"

const loginApi = (username: string, password: string): Promise<{ token: string; success: boolean }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ token: `${username}-${password}`, success: true })
    }, 500)
  })
}

export const useLogin = () => {
  const { loading, run } = useRequest(loginApi, {
    manual: true
  })

  return { loading, login: run }
}
