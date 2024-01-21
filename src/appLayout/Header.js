import { Col, Input, Row, Select, Space } from "antd"
const options = [
    {
        value: 'all',
        label: 'all',
    },
    {
        value: 'asia',
        label: 'asia',
    },
    {
        value: 'america',
        label: 'america',
    }
]
function Header({ query, setQuery }) {
    return (
        <Row justify='space-between' align='middle' style={{
            height: '120px'
        }}>
            <Col span={8}>
                <Input placeholder='Search Country' size='large' value={query} onChange={(e) => setQuery(e.target.value)} style={{
                    backgroundColor: 'hsl(209, 23%, 22%)',
                    color: 'hsl(0, 0%, 100%)',
                    borderColor: 'hsl(209, 23%, 22%)',
                }} />
            </Col>
            <Col span={8} >
                <Space direction='vertical' style={{ width: '100%' }} align='end'>
                    <Select placeholder='Filter By Region' size='large' options={options} style={{ width: 200 }} />
                </Space>
            </Col>
        </Row>
    )
}

export default Header
