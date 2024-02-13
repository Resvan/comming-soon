import React from 'react';
import ReviewCard from './ReviewCard';

const ShuffleCard = () => {
    return (
            <div className="wrapper">
                <div className="outer">
                    <div className="card" style={{ '--delay': -1 }}>
                        <ReviewCard/>
                    </div>
                    <div className="card" style={{ '--delay': 0 }}>
                        <ReviewCard />
                    </div>
                    <div className="card" style={{ '--delay': 1 }}>
                        <ReviewCard />
                    </div>
                    <div className="card" style={{ '--delay': 2 }}>
                        <ReviewCard />
                    </div>
                    <div className="card" style={{ '--delay': 2 }}>
                        <ReviewCard />
                    </div>
                </div>
            </div>
    );
};

export default ShuffleCard;
