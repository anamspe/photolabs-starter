import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, togglePhotosByTopic }) => {
  return (
    <div
      className="topic-list__item"
      onClick={() => togglePhotosByTopic(topic.id)}
    >
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
