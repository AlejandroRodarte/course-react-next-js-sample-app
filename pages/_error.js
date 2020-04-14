import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
    <div>
        <h1>
            Oops! Something went wrong.
        </h1>
        <p>
            Try
            <Link href="/">
                <a>
                    going to the home page
                </a>
            </Link>
        </p>
        <button onClick={ () => Router.push('/') }>
            Go to home
        </button>
    </div>
);

export default errorPage;
