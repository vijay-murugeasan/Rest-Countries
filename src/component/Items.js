
import { Card, Col } from "antd"
import "./Item.css"
function Items({ country }) {

    const { flags: { png }, name: { common }, population, region, capital } = country;
    return (
        <Col xs={24} sm={12} md={12} lg={6} >
            <Card hoverable cover={<img alt="example" src={png} style={{ aspectRatio: 16 / 9, objectFit: 'cover', width: '100%' }} />} style={{
                backgroundColor: 'hsl(209, 23%, 22%)',
                color: 'white',
                borderColor: 'hsl(209, 23%, 22%)',
            }}>
                <h2>{common}</h2>
                <p><b>Population</b> : {population}</p>
                <p><b>Region</b> : {region}</p>
                <p><b>Capital</b> : {capital}</p>
            </Card>
        </Col>
    )
}

export default Items
