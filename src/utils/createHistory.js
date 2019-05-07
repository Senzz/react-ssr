import { isServer } from './index'
import { createBrowserHistory, createMemoryHistory } from 'history'

// client和server公用
const createHistory = (url = '/') => {
  const history = isServer
    ? createMemoryHistory({
      initialEntries: [url]
    })
    : createBrowserHistory();
  return history;
}
export default createHistory;
