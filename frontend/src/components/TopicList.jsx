import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({topics}) => {

const eachTopic = topics.map((topic) => (
  <TopicListItem
  key={topic.id}
  topic={topic}
  />
))

  return (
    <div className="top-nav-bar__topic-list">
      {eachTopic}
    </div>
  );
};

export default TopicList;
