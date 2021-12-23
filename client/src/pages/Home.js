import React from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

//Import the Apollo hook - which comes from ApolloProvider
import { useQuery } from '@apollo/client';

//Import the querie saved in the utils/queries.js file
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

//Import friendList to be used on right column
import FriendList from '../components/FriendList';

// Import logged in verificatio
import Auth from '../utils/auth';

const Home = () => {
  //use useQuery hook to make request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  // If data exists store it in thoughts, otherwise save an empty array.
  const thoughts = data?.thoughts || [];

  //!Confirms thoughts are loading.
  //console.log(thoughts);

  //returns true or false to verify login status.
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className='flex-row justify-space-between'>
        {loggedIn && (
          <div className='col-12 mb-3'>
            <ThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title='Some Feed for Thought(s)...'
            />
          )}
        </div>

        {loggedIn && userData ? (
          <div className='col-12 col-lg-3 mb-3'>
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
