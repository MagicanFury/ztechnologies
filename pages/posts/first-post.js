import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

const LogoComponent = () => (
    <Image
        src="/images/arrowlogo-shaded.png"
        height={144}
        width={144}
        alt="ZTechnologies Logo"
    />
)

export default function FirstPost() {
    return (
      <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
            src="/main.js"
            strategy="beforeInteractive"
            onLoad={() =>
                console.log('Loaded main.js')
            }
        />
        <h1>First Post</h1>
        <h2 className="title">
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    )
}