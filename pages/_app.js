import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { createStore } from 'redux'


function reducer(state = { user: null }, action) {
  console.log(action)
  switch (action.type) {
    case 'setUser':
      return {
      	...state,
        user: action.user,
     }
    case 'setShowNewListing':
      return {
        ...state,
        showNewListing:  action.showNewListing,
      }
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducer)

function MyApp({ Component, pageProps }) {
  return(
  	 <Provider store={store}>
	  	<GoogleOAuthProvider clientId="1081541241057-9c2u4qf18ubnkk5aeinnh75ihlj5eso5.apps.googleusercontent.com">
	  	 	<Component {...pageProps} />
	  	 </GoogleOAuthProvider>
  	 </Provider>
  	)

}

export default MyApp
