import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

import clsx from 'clsx';

import SelectTag from '../SelectTag';
import TextField, { TextFieldVariant } from '../TextField';
import usePopoverOpener from '../../lib/usePopoverOpener.ts';

import { SearchSelectProps } from './types.ts';

import styles from './MultiSelect.module.scss';
import SelectOption from '../SelectOption/SelectOption.tsx';
import Icons from '../../icons/index.ts';

function MultiSelect({
  options,
  onClose,
  clear,
  placeholder = 'Не выбрано',
}: SearchSelectProps) {
  const { elementRef, isShowModal, switchIsShowModal } = usePopoverOpener();

  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    isShowModal === false && onClose && onClose();
  }, [isShowModal, onClose]);

  const onUncheckHandler = () => {
    clear();
    setSearch('');
  };

  type CustomReduceType = {
    checked: ReactNode[];
    unchecked: ReactNode[];
  };

  const { checked: checkedItems, unchecked: uncheckedItems } = options.reduce(
    (
      accumulator: CustomReduceType,
      {
        checked,
        label,
        tagLabel,
        searchValue,
        onDelete,
        onSelect,
        tooltipTitle,
        disabled,
      },
      index
    ) => {
      if (checked) {
        accumulator.checked.push(
          <SelectTag
            tooltipTitle={tooltipTitle}
            key={index}
            content={tagLabel}
            onDelete={onDelete}
          />
        );
      } else {
        if (
          searchValue.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          accumulator.unchecked.push(
            <SelectOption
              tooltipTitle={tooltipTitle}
              key={index}
              content={label}
              onClick={onSelect}
              disabled={disabled}
            />
          );
        }
      }
      return accumulator;
    },
    {
      checked: [],
      unchecked: [],
    }
  );

  const selectedSection = (
    <div className={styles.selected}>
      <div className={styles.selected__title}>Выбрано</div>
      <div className={styles.selected__items}>{checkedItems}</div>
    </div>
  );

  const onInputSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const onInputClick = () => {
    switchIsShowModal();
  };

  return (
    <div ref={elementRef} className={styles.wrapper}>
      <div className={styles.inputWrapper} onClick={onInputClick}>
        {checkedItems.length === 0 ? (
          <div className={styles.placeholder}>{placeholder}</div>
        ) : (
          <div className={styles.input}>
            {checkedItems.length <= 5 ? (
              checkedItems
            ) : (
              <>
                {checkedItems.slice(0, 5)}
                <span className={styles.subtitle}>
                  + {checkedItems.length - 5} ...
                </span>
              </>
            )}
          </div>
        )}
        {checkedItems.length !== 0 && (
          <button className={styles.btn_clear} onClick={onUncheckHandler}>
            <Icons.Cross />
          </button>
        )}
        <div
          className={clsx(styles.arrow, {
            [styles.arrow_down]: isShowModal,
          })}
        >
          <Icons.Chevron />
        </div>
      </div>
      <div
        className={clsx(styles.dropdown, {
          [styles.dropdown_hidden]: !isShowModal,
        })}
      >
        <label className={styles.search}>
          <div className={styles.search__icon}>
            <Icons.Search />
          </div>
          <TextField
            className={styles.search__input}
            variant={TextFieldVariant.Input}
            value={search}
            placeholder={'Поиск'}
            onChange={onInputSearch}
          />
        </label>
        {checkedItems.length !== 0 && selectedSection}
        <div className={styles.options}>
          {uncheckedItems.length !== 0 ? uncheckedItems : 'Ничего не найдено'}
        </div>
      </div>
    </div>
  );
}

export default MultiSelect;
