import PropTypes from 'prop-types';
import { FeedBackList, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedBackList>
      {options.map(option => {
        return (
          <li key={option}>
            <Btn onClick={() => onLeaveFeedback(option)}>{option}</Btn>
          </li>
        );
      })}
    </FeedBackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
