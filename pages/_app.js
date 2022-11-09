// import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }) {
  return(
  	<GoogleOAuthProvider clientId="1081541241057-9c2u4qf18ubnkk5aeinnh75ihlj5eso5.apps.googleusercontent.com">
  	 	<Component {...pageProps} />
  	 </GoogleOAuthProvider>
  	)

}

export default MyApp
