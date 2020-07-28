import React from 'react';
import './button.css';
import classNames from 'classnames';

const Button = ({className, children, onClick, disabled, active, ...attr}) => {

  let styles = classNames(
    'btn',
    {active},
    className
  )
  const Tag = attr.href ? 'a' : 'button';
  return(
    <Tag className={styles} onClick={onClick} disabled={disabled} active={active}>{children}</Tag>
  );
}
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};
Button.defaultProps = {

};

export default Button;

