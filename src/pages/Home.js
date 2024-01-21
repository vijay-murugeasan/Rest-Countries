import { Layout, Spin } from 'antd';
import { useEffect, useState } from 'react';
import Header from '../appLayout/Header';
import Main from '../appLayout/Main';
import { UseFetchCountries } from '../Hooks/UseFetchCountries';
import { LoadingOutlined } from '@ant-design/icons';

const { Content } = Layout;

function Home() {
    const [query, setQuery] = useState("");


    const [countries, isLoading, error] = UseFetchCountries()

    console.log(countries)
    const SearchedCountry = query.length > 0
        ? countries.filter((country) =>
            `${country.name.common} `
                .toLowerCase()
                .includes(query.toLowerCase())
        )
        : countries;


    return (
        <Content
            style={{
                padding: '2% 5%',
                backgroundColor: 'hsl(207, 26%, 17%)',
                minHeight: '100vh'
            }}
        >
            <Header query={query} setQuery={setQuery} />
            {isLoading && <Spin spinning fullscreen indicator={
                <LoadingOutlined
                    style={{
                        fontSize: 50,
                    }}
                    spin
                />
            }
            />}
            {!isLoading && <Main countries={SearchedCountry} />}
        </Content>

    )
}

export default Home
