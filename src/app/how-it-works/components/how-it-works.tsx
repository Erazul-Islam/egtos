import React from 'react';
import HowItWorksHero from './how-it-works-hero';
import EgtosHelp from './egtos-help';
import EgtosBenifit from './egtos-benefit';
import Talent from './talent';
import FrequentlyAskQuestions from './faq';

const HowItWorks = () => {
    return (
        <div>
            <HowItWorksHero/>
            <EgtosHelp/>
            <EgtosBenifit/>
            <Talent/>
            <FrequentlyAskQuestions/>
        </div>
    );
};

export default HowItWorks;