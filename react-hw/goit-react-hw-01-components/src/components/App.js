import React from "react";
import "../index.css";
import SocialProfile from "./social-profile/social-profile";
import SPParam from "./social-profile/social-profile.json";
import Statistics from "../components/statistics/statistics";
import statisticsData from "../components/statistics/statistics-data.json";
import FriendsList from "../components/friends/friends";
import friendsData from "./friends/friends.json";
import TransactionHistory from "./transaction-history/transaction-history";
import THData from "./transaction-history/transaction-history_data.json";

const App = () => (
  <>
    <SocialProfile
      name={SPParam.name}
      tag={SPParam.tag}
      location={SPParam.location}
      avatar={SPParam.avatar}
      stats={SPParam.stats}
    />
    <Statistics title="Upload stats" stats={statisticsData} />
    <FriendsList friends={friendsData} />
    <TransactionHistory items={THData} />
  </>
);

export default App;