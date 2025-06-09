import { Layout, Navbar } from "nextra-theme-docs"
import { Head } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import "nextra-theme-docs/style.css"
import React from "react";
import LastUpdated from "@/components/lastUpdates";

export const metadata = {
    title: "FoxoCorp Docs",
    description: "FoxoCorp Developer Documentation",
};

export default async function RootLayout({ children }) {
    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
        >
            <Head>
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="FoxoCorp Docs" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body>
                <Layout
                    navbar={<Navbar logo={<b>FoxoCorp Docs</b>} />}
                    pageMap={await getPageMap()}
                    darkMode={true}
                    docsRepositoryBase="https://github.com/foxocorp/docs/tree/main/"
                    footer={<span></span>}
                    editLink={null}
                    feedback={{ content: null }}
                    navigation={false}
                    lastUpdated={<LastUpdated />}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}
