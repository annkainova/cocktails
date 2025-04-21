import clsx from 'clsx';

import { SelectTagProps } from './types';

import styles from './SelectTag.module.scss';
import Icons from '../../icons';

function SelectTag(props: SelectTagProps) {
  const { content, onDelete, isDisabled, tooltipTitle, hideDeleteIcon } = props;

  const onDeleteHandler = () => {
    if (!isDisabled && onDelete) {
      onDelete();
    }
  };

  return (
    <div
      title={tooltipTitle}
      className={clsx(styles.wrapper, {
        [styles.disabled]: isDisabled,
      })}
    >
      <div className={styles.inner}>{content}</div>
      {!hideDeleteIcon && (
        <div className={styles.delete} onClick={onDeleteHandler}>
          <Icons.Cross />
        </div>
      )}
    </div>
  );
}

export default SelectTag;
