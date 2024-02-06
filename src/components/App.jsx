import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbaclOptions/FeedbackOptions";
import Notification from "./Notificiations/Notificiations";
import css from "./app.module.css"


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prev => ({ [type]: prev[type] + 1 }));
  };

  countTotalFeedback = () =>
  this.state.bad + this.state.good + this.state.neutral;

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(good);
    const options = Object.keys(this.state);
    
    return (
      <div className={css.appContainer}>
      <Section title="Please leave your feedback">
      <FeedbackOptions
        handleFeedback={this.handleFeedback}
        options={options}
      />
      </Section>
      <Section>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
    </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
