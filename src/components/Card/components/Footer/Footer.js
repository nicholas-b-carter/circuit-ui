import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const baseStyles = ({ theme }) => css`
  label: card__footer;
  display: block;
  width: 100%;
  margin-top: ${theme.spacings.giga};

  ${theme.mq.kilo`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: ${theme.spacings.mega};
  `};
`;

/**
 * Footer used in the Card component. Used for styling and aligment
 * purposes only.
 */
const CardFooter = styled('footer')`
  ${baseStyles};
`;

CardFooter.propTypes = {
  /**
   * Buttons wrapped in a ButtonGroup.
   */
  children: PropTypes.element
};

/**
 * @component
 */
export default CardFooter;
