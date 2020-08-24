import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  getByIdProjectSuccess,
  findAllProjectSuccess,
  getProjectFailure,
  deleteProjectSuccess,
} from './actions';

export function* getByIdProjectRequest({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.get, `/project/project/${id}`);

    yield put(getByIdProjectSuccess(response.data));
  } catch (err) {
    toast.error(
      'There was a problem load your projects. Please verify your data'
    );

    yield put(getProjectFailure());
  }
}

export function* findAllProjectRequest({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.get, `/project/${id}/project`);

    yield put(findAllProjectSuccess(response.data));
  } catch (err) {
    toast.error(
      'There was a problem load your projects. Please verify your data'
    );

    yield put(getProjectFailure());
  }
}

export function* deleteProjectRequest({ payload }) {
  try {
    const { id } = payload.data;

    yield call(api.delete, `/project/project/${id}`);

    const response = yield call(api.get, `/project/${id}/project`);

    yield put(deleteProjectSuccess(response.data));
    console.log(response.data);
    toast.success('Delete success');
  } catch (err) {
    toast.error(
      'There was a problem load your projects. Please verify your data'
    );

    yield put(getProjectFailure());
  }
}

export default all([
  takeLatest('@user/GET_BYID_PROJECT_REQUEST', getByIdProjectRequest),
  takeLatest('@project/FIND_ALL_PROJECT_REQUEST', findAllProjectRequest),
  takeLatest('@project/DELETE_PROJECT_REQUEST', deleteProjectRequest),
]);
