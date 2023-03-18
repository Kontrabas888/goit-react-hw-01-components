import { Profile } from "./profile/Profile.jsx";
import { Statistics } from "./statistics/Statistics.jsx";
import { FriendList } from "./friendList/FriendList.jsx";
import { TransactionHistory } from "./transactionHistory/TransactionHistory.jsx"
import user from "../patch/user.json"
import data from "../patch/data.json"
import friends from "../patch/friends.json"
import transactions from "../patch//transactions.json"



export const App = () => {
  return (
    <>
    <Profile profile={user} />
      <Statistics statistics={data} />
      <FriendList friendList={friends} />
      <TransactionHistory transactionHistory={transactions} />
    </>
  );
};
