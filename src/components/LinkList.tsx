import React from 'react';
import Link from './Link';
import { useQuery, gql } from "@apollo/client";
import {ILink} from "../interfaces/Link";

const FEED_QUERY = gql`
    query {
        feed {
            links {
                url
                description
            }
        }
    }
`;

interface response_data {
    feed: feed
}

interface feed {
    links:ILink[]
}

const LinkList = () => {

    const { loading, data } = useQuery<response_data>(FEED_QUERY);
    console.log(data);

    return (
        <div>
            {loading ? (<p>Loading ...</p>) : ( data && data.feed.links.map((link:ILink) => {
                return <Link key={link.id} link={link} />
            }))}
        </div>
    )
}

export default LinkList