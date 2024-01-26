import React, { useState } from 'react';

import Autosuggest from 'react-autosuggest';
import { defaultTheme } from 'react-autosuggest/dist/theme';
import { Control, Controller, FieldValues } from 'react-hook-form';

import renderSuggestion from './RenderSuggestions';

const getSuggestions = async (value) => {
  if (value.length < 3) {
    return [];
  }
  const response = await fetch(`/api/hotels?search=${value}`);
  const data = await response.json();
  return data.message;
};
interface InputProps {
  control: Control<FieldValues>;
  name: string;
  id: string;
  type: string;
  rules?: any;
  ref?: any;
}

const AutoComplete: (props: InputProps) => JSX.Element = (props: InputProps) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (_event: React.ChangeEvent<HTMLInputElement>, { newValue }) => {
    setValue(newValue);
    return newValue;
  };
  const onSuggestionsFetchRequested = async () => {
    setSuggestions(await getSuggestions(value));
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const inputProps = {
    placeholder: 'Search an hotel',
    value,
    onChange,
    className: 'border-solid border w-full rounded px-3 py-2',
  };
  const getSuggestionValue = (suggestion: any) => {
    props.control.setValue(props.name, suggestion.id);
    return suggestion.value;
  };
  return (
    <Controller
      as={(
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          theme={defaultTheme}
        />
      )}
      {...props}
    />
  );
};
export default AutoComplete;
