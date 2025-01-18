import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import "./SwaggerDark.css"

const css = `.nextra-toc { display: none; }`

export default function Reference() {
    return (
        <>
            <style>{css}</style>
            <SwaggerUI url="https://api.dev.foxogram.su/v3/api-docs"/>
        </>
    )
}
