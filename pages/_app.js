import '../styles/globals.css';
import {MoralisProvider} from "react-moralis";
function MyApp({ Component, pageProps }) {
  return(
    <MoralisProvider appId="nGgpQ23BTzIiV7AqMGSBTXWFNBWfSbZX7aMY1to6" serverUrl='https://ncqawy7nybsq.usemoralis.com:2053/server'>
      {<Component {...pageProps} />}
    </MoralisProvider>
  )
}

export default MyApp
