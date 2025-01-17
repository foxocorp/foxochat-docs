import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import "./SwaggerDark.css"

export default function ApiReference() {
    return (
        <SwaggerUI url="https://api.dev.foxogram.su/v3/api-docs" />
    )
}
