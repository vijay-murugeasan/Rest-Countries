import { Row } from "antd"
import Items from "../component/Items"

function Main({ countries }) {
    return (
        <Row justify='center' gutter={[
            {
                xs: 32, sm: 54,
                md: 24, lg: 54
            }, {
                xs: 32, sm: 54,
                md: 24, lg: 54
            }
        ]}>
            {countries.map((country) => {
                return (
                    <Items country={country} key={country.name.common} />
                )
            })}


        </Row >
    )
}

export default Main
