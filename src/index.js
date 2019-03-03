// import React and ReactDom

import React from 'react';
import ReactDOM from 'react-dom';
import Faker from "faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";





// create react component

const App =  () => {

    return (
      <div className="ui container comments">
          <ApprovalCard>
          <CommentDetail avt={Faker.image.avatar()} author="Sam" timeAgo="Today at 6:OO Am" description="Nice JOB!"/>
          </ApprovalCard>
          <ApprovalCard>
          <CommentDetail avt={Faker.image.avatar()} author="Oga" timeAgo="Today at 9:OO Am" description="Nice Blog!"/>
          </ApprovalCard>
          <ApprovalCard>
          <CommentDetail avt={Faker.image.avatar()} author ="Yeo" timeAgo="Today at 12:OO Am" description="I like you!"/>
          </ApprovalCard>
      </div>

    );
};


// show the react component on the screen


ReactDOM.render(
    <App />,
    document.getElementById('root')
);