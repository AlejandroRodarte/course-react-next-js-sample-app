import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {

    // populate from db before component even loads
    // since this hook is called on the server
    static async getInitialProps(context) {

        // printed on the server
        // pathname, query params, actual browser path, req and res objects, errors, etc
        console.log(context);

        const promise = new Promise((resolve, reject) => setTimeout(() => resolve({ appName: 'super-app' }), 1000));
        const data = await promise;

        return {
            ...data,
            ...context.query
        };

    }

    render() {

        return (
            <div>
                <h1>
                    The main page of { this.props.appName } by { this.props.name }
                </h1>
                <p>
                    Go to 
                    <Link href="/auth">
                        <a>
                            Auth
                        </a>
                    </Link>
                </p>
                <button onClick={ () => Router.push('/auth') }>
                    Go to auth
                </button>
            </div>
        );

    }
   
};

export default IndexPage;
