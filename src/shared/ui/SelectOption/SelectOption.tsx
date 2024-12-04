import clsx from 'clsx';

import { SelectOptionProps } from './types';

import styles from './SelectOption.module.scss';

function SelectOption(props: SelectOptionProps) {
  const { onClick, content, tooltipTitle, disabled } = props;

  return (
    <div
      title={tooltipTitle}
      className={clsx(styles.wrapper, {
        [styles.wrapper_disabled]: disabled,
      })}
      onClick={!disabled ? onClick : undefined}
    >
      {content}
    </div>
  );
}

export default SelectOption;
