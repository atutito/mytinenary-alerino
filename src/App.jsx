import { RouterProvider } from 'react-router-dom'
import router from "./router";
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import user_actions from "./store/actions/users";
import { useEffect } from 'react';
const { signin_token } = user_actions;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      dispatch(signin_token());
    }
  }, [])
  return (
    <Provider store= {store}>
    <RouterProvider router={router} />
    </Provider>

  )
}

export default App;