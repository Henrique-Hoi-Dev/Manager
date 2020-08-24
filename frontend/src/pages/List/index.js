import React from 'react';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import { Container } from './styles';

import api from '~/services/api';

import { getByIdProjectRequest } from '~/store/modules/project/actions';
import { useSelector, useDispatch } from 'react-redux';

const schema = Yup.object().shape({
  title: Yup.string().required('Please enter one title'),
});

export default function List(props) {
  const { _id } = useSelector((state) => state.project.currentProject) || {};
  const dispatch = useDispatch();

  async function handleSubmit({ title }) {
    try {
      const { id } = props.match.params;
      console.log(props.match.params);
      const lists = await api.post(`/project/${id}/list`, {
        title: title,
      });

      if (lists) {
        toast.success('List saved successfully.');
        dispatch(getByIdProjectRequest({ id: _id }));
        props.history.push('/main');
      }
    } catch (e) {
      toast.error('List not saved. Please verify your data.');
    }
  }

  function onClickBack() {
    props.history.push('/main');
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h4>New List </h4>
        <div className="form-group">
          <label>Title</label>
          <Input
            className="form-control"
            placeholder="Title list on board"
            type="text"
            name="title"
          />
        </div>
        <div className="form-group button-card-actions">
          <button
            className="btn btn-info button-save-list"
            size="lg"
            type="submit"
          >
            Salvar
          </button>
          <button
            className="btn btn-secondary button-cancel-list"
            variant="secondary"
            type="button"
            onClick={onClickBack}
          >
            Cancelar
          </button>
        </div>
      </Form>
    </Container>
  );
}
