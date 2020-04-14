import React from 'react';

import User from '../../components/User';

const authIndexPage = ({ appName }) => (
    <div>
        <h1>
            The auth index page of { appName }
        </h1>
        <User name="Alejandro" age="28" />
    </div>
);

authIndexPage.getInitialProps = async () => {

    const promise = new Promise((resolve, reject) => setTimeout(() => resolve({ appName: 'super-auth-app' }), 1000));
    const data = await promise;

    return data;
};

export default authIndexPage;
