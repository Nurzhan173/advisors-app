import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Advisor } from "../service/service";
import { useAdvisorsStore } from "../providers/RootStoreProvider";
import { observer } from "mobx-react-lite";
import "./index.css";
import { toJS } from "mobx";

const Index: React.FC = observer(() => {
  const [hasMore, setHasMore] = useState(true);
  const { filter, getAdvisors, advisors, getMoreAdvisors } = useAdvisorsStore();

  useEffect(() => {
    getAdvisors();
  }, []);

  console.log(toJS(advisors));

  return (
    <div className="wrapper">
      <h1 onClick={filter}>Advisor List</h1>
      <InfiniteScroll
        dataLength={advisors.length}
        next={getMoreAdvisors}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {advisors.map((advisor: Advisor) => (
          <div key={advisor.id}>
            <p>{advisor.name}</p>
            <img src={advisor.avatar} alt="" width={150} height={150} />
            {/*<p>Online: {advisor.online ? 'Yes' : 'No'}</p>*/}
            {/*<p>Languages: {advisor.languages.join(', ')}</p>*/}
            {/*<p>Reviews: {advisor.reviews}</p>*/}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
});

export default Index;
