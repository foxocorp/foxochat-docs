import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import React from "react";

export const metadata = {
    title: "Foxogram Docs",
    description: "Foxogram Developer Documentation",
};

const navbar = <Navbar logo={<b>Foxogram Docs</b>} />

export default async function RootLayout({ children }) {
    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
        >
        <Head>
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <meta name="apple-mobile-web-app-title" content="Foxogram Docs"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </Head>
        <body>
        <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            darkMode={false}
            docsRepositoryBase="https://github.com/foxocorp/foxogram-docs/tree/main/"
            footer={<span></span>}
            editLink={null}
            feedback={{ content: null }}
            navigation={false}
            lastUpdated={<span></span>}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}
