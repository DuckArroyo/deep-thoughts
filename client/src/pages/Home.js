import React from 'react';
import ThoughtList from '../components/ThoughtList';

//Import the Apollo hook - which comes from ApolloProvider
import { useQuery } from '@apollo/client';

//Import the querie saved in the utils/queries.js file
import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  //use useQuery hook to make request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // If data exists store it in thoughts, otherwise save an empty array.
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title='Some Feed for Thought(s)...'
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
