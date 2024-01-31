import css from "./feedbackOptions.module.css"
import PropTypes from "prop-types";

export default function FeedbackOptions ({ options, handleFeedback }) {
    const elements = options.map(key => (
        <li className={css.item} key={key}>
          <button
            className={css.btn}
            id={key}
            type="button"
            onClick={() => handleFeedback(key)}
          >
            {key}
          </button>
        </li>
      ));
      return <ul className={css.list}>{elements}</ul>;
    }

    FeedbackOptions.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        handleFeedback: PropTypes.func.isRequired,
      };