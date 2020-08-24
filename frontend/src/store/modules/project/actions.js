export function findAllProjectRequest(data) {
  return {
    type: '@project/FIND_ALL_PROJECT_REQUEST',
    payload: { data },
  };
}

export function getByIdProjectRequest(data) {
  return {
    type: '@project/GET_BYID_PROJECT_REQUEST',
    payload: { data },
  };
}

export function getByIdProjectSuccess(data) {
  return {
    type: '@project/GET_BYID_PROJECT_SUCCESS',
    payload: { data },
  };
}

export function findAllProjectSuccess(data) {
  return {
    type: '@project/FIND_ALL_PROJECT_SUCCESS',
    payload: { data },
  };
}

export function deleteProjectRequest(data) {
  return {
    type: '@project/DELETE_PROJECT_REQUEST',
    payload: { data },
  };
}

export function deleteProjectSuccess(data) {
  return {
    type: '@project/DELETE_PROJECT_SUCCESS',
    payload: { data },
  };
}

export function getProjectFailure() {
  return {
    type: '@project/GET_PROJECT_FAILURE',
  };
}
