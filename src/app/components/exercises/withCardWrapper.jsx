import React from 'react';

const withCardWrapper = (Component) => (props) => {
    return (
        <div className="card my-2">
            <div className="card-body">{<Component{...props}/>}</div>
        </div>
    );
}

export default withCardWrapper;