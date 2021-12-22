import React from 'react';
import { useParams } from 'react-router-dom';
import ReactionList from '../components/ReactionList';

// useQuery is a hook
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT, QUERY_THOUGHTS } from '../utils/queries';

const SingleThought = (props) => {
  const { id: thoughtId } = useParams();
  // console.log(thoughtId);

  //The loading variable is then used to briefly show a loading <div> element, and the data variable is used to populate a thought object.
  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId },
  });

  const thought = data?.thought || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
<div>
  <div className="card mb-3">
    <p className="card-header">
      <span style={{ fontWeight: 700 }} className="text-light">
        {thought.username}
      </span>{' '}
      thought on {thought.createdAt}
    </p>
    <div className="card-body">
      <p>{thought.thoughtText}</p>
    </div>
  </div>
  {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}
</div>
  );
};

export default SingleThought;
