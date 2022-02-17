import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
<<<<<<< HEAD
import "../styles/index.css"
=======
import "../styles/mainCliente.css"
import '../css/index.css'
>>>>>>> ae0c6112f6fd4f2a0a458fbd539ef4b448cbdc9f

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
  </Head>

  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"/>
  
  <div className='container'>
    <Component {...pageProps} />
  </div>
  </>
}

export default MyApp