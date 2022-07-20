import { apiUser, apiTeste } from '../../electron/routes'

declare global {
  // eslint-disable-next-line
  interface Window {
    User: typeof apiUser
    Teste: typeof apiTeste
  }
}
