import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentText="Great Job!" 
                    imgSrc={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    commentText="Beautiful!" 
                    imgSrc={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail   
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    commentText="I like it!" 
                    imgSrc={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
};  

ReactDOM.render(<App />, document.querySelector('#root'));