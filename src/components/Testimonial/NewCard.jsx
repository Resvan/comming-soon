import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

const NewCard = () => {

    const cards = [
        { backgroundColor: 'red', content: 'my card one' },
        { backgroundColor: 'green', content: 'my card two' },
        { backgroundColor: 'blue', content: 'my card three' },
        { backgroundColor: 'yellow', content: 'my card four' },
        { backgroundColor: 'black', content: 'my card five' }
    ];

    const [activeCard, setActiveCard] = useState(0);
    const [prevCard, setPrevCard] = useState(cards.length-1);
    const [nextCard, setNextCard] = useState(1);


    const handleNext = () => {
        setPrevCard(activeCard);
        setActiveCard((prev) => (prev + 1) % cards.length);
        setNextCard((prev) => (prev + 1) % cards.length);
    };

    const handlePrev = () => {
        setActiveCard(prevCard);
        setNextCard(activeCard);
        setPrevCard((prev) => (prev - 1 + cards.length) % cards.length);
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    height: '10rem',
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            zIndex: activeCard === index ? 2 : nextCard === index ? 1 :  0,
                            opacity: activeCard === index ? 1 : nextCard === index ? 0.5 : prevCard === index ? 0 : 0,
                            transition: 'all 0.5s linear',
                            transform: activeCard === index ? 'translateY(50%) translateX(-20%) ' : prevCard === index ? 'translateY(100%) translateX(0%)' :'none',
                        }}
                    >
                        <ReviewCard/>
                    </div>
                ))}
            </div>
            <button style={{
                marginTop:'15rem'
            }} onClick={handleNext}>Next</button>
            <button onClick={handlePrev}>Prev</button>
        </>
    );
};

export default NewCard;
