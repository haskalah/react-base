import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const TEST = gql`
    {
        test
    }
`;

const Landing = () => (
    <Query query={TEST}>
        {({loading, error, data}) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return (
                <div>
                    <h1>Landing</h1>
                    <p>Test Data: {data.test}</p>
                </div>
            );
        }}
    </Query>
);

export default Landing;
