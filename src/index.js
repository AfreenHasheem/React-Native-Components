import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                comment="Good blog!" 
                image={faker.image.avatar()} 
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00AM" 
                comment="Nice Post!" 
                image={faker.image.avatar()} 
            />
            <CommentDetail 
                author="jane" 
                timeAgo="Yesterday at 5:00PM" 
                comment="Nicely written!" 
                image={faker.image.avatar()} 
            />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);