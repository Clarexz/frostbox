import '../styles/globals.css'
import firebase, { FirebaseContext } from '../Firebase/context';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
