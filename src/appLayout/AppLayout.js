import React from 'react';
import { Layout } from 'antd';
import Home from '../pages/Home';

const { Header } = Layout;


const AppLayout = () => {

    return (
        <Layout >
            <Header
                mode="horizontal" style={{
                    backgroundColor: 'hsl(209, 23%, 22%)',
                    color: 'white'
                }}>
                <h2 style={{ margin: 0 }}>Where in the world?</h2>

            </Header>
            <Home />
        </Layout >
    );
};
export default AppLayout;