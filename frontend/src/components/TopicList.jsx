import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

import topics from "../mocks/topics";


const eachTopic = topics.map((topic) => (
  <TopicListItem
  key={topic.id}
  topic={topic}
  />
))

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {eachTopic}
    </div>
  );
};

export default TopicList;
