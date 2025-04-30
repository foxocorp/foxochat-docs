import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import "./SwaggerDark.css"

const css = ".nextra-toc { display: none; }"

export default function Swagger({ url }) {
    return (
        <>
            <style>{css}</style>
            <SwaggerUI url={url} />
        </>
    )
}
