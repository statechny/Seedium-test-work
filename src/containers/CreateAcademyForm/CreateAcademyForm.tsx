import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import useHttp from '../../hooks/http.hook';

import { StyledForm } from './styled';
import { StyledCaption } from '../../styled/typography';

const options = [
  { value: 'general', label: 'General', name: 'type' },
  { value: 'football', label: 'Football', name: 'type' },
];

const CreateAcademyForm: React.FunctionComponent = () => {
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState<object>({
    title: '',
    type: '',
  });

  const history = useHistory();

  const changeHandler = (event: {
    target: { name: string; value: string };
  }) => {
    setForm({ ...form, [event.target.name]: event.target.value.trim() });
  };

  const selectHandler = (selectedOption: { name: string; value: string }) => {
    setForm({ ...form, [selectedOption.name]: selectedOption.value.trim() });
  };

  const submitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await request('/academies', 'POST', { ...form });
      if (response.ok) {
        history.push('/');
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
  };

  useEffect(() => {
    clearError();
  }, [clearError, form]);

  return (
    <StyledForm onSubmit={e => submitHandler(e)}>
      <StyledCaption>Create Academy</StyledCaption>
      <Input
        type="text"
        label="Academy Title"
        name="title"
        id="title"
        placeholder="Enter Academy Title..."
        isAutoComplete="off"
        changeHandler={changeHandler}
      />
      <Select
        options={options}
        label="Academy Type"
        changeHandler={selectHandler}
      />
      <Button text="Create Academy" type="submit" isDisabled={loading} />
      {error && <span>{error}</span>}
    </StyledForm>
  );
};

export default CreateAcademyForm;
