// /* 
// User profile includes:
//     - saved/liked image card array of GeoCatches
//     - completed/posted image card array of Geocatches
//     - Subscription button, opens modal to pay through Stripe
// */

// import React from 'react';

// // Import the `useParams()` hook
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import CatchList from '../../components/CatchList/CatchList';
// import Auth from '../../utils/auth';
// import { QUERY_USER, QUERY_ME } from '../../utils/queries';
// import { useRadio } from "@chakra-ui/react";

// const Profile = () => {

//     // Use `useParams()` to retrieve value of the route parameter `:profileId`
//     const { userId } = useParams();

//     // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
//   const { loading, data } = useQuery(
//     userId ? QUERY_USER : QUERY_ME,
//     {
//       variables: { userId: userId },
//     }
//   );

//   // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
//   const user = data?.me || data?.user || {};

//   // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
//     return <Navigate to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see your profile page. Use the navigation
//         links above to sign up or log in!
//       </h4>
//     );
//   }

//     return (
//       <div>
//         <h2 className="card-header">
//           {user.username}'s posts and catches:
//         </h2>

//     <div className="container">

// <p>This will be the user's profile.</p>


// <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>

// {user.posts?.length > 0 && <CatchList post={user.posts} />}
// {user.catches?.length > 0 && <CatchList catch={user.catches} />}
// </div>
//     </div>
//     </div>
//   );
// };

// export default Profile;