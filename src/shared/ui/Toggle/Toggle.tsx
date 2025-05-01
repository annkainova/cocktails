import cl from './Toggle.module.scss';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className={cl.wrapper}>
      {label && <span className={cl.label}>{label}</span>}
      <input
        type="checkbox"
        className={cl.input}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={cl.slider}></span>
    </label>
  );
}

export default Toggle;
