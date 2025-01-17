import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    reactStrictMode: true
}

const withNextra = nextra({
    latex: {
        renderer: "mathjax"
    },
    search: {
        codeblocks: false
    }
})

export default withNextra(nextConfig);
