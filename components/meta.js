import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        font-family: SF UI Text, -apple-system, Helvetica, Arial, sans-serif;
        background: #eee;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)
