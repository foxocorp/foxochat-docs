import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    }
}

const withNextra = nextra({
    latex: true,
    search: {
        codeblocks: false
    }
})

export default withNextra(nextConfig);
