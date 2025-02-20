import { useEffect, useState } from "react";
import { getTweetsByUser } from "/api/tweetApi";

const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweetsByUser(1).then(setTweets);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Kullanıcının Tweetleri</h2>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id} className="border p-2 mb-2 rounded">
            {tweet.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetList;
