import MultiSelect from './shared/ui/MultiSelect/MultiSelect';

function App() {
  const options = [
    {
      label: <div>string</div>,
      tagLabel: <div>string</div>,
      searchValue: 'string',
      checked: false,
      onDelete: () => {},
      onSelect: () => {},
    },
  ];
  return <MultiSelect onClose={() => {}} clear={() => {}} options={options} />;
}

export default App;
