import React, { Component } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Statistics } from '../Statistics/Statistics';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = evt => {
    this.setState(prevState => {
      return {
        [evt]: prevState[evt] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, current) => sum + current);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return Math.round(good * 100 / (this.countTotalFeedback()));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() === 0 ?
            <Notification message='There is no feedback' /> :
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />)}
        </Section>
      </>

    );
  };
}
