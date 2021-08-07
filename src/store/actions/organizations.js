import { createAction } from "redux-actions";
import {
  ORGANIZATIONS_FETCH_ORGANIZATIONS,
  ORGANIZATIONS_FETCH_ORGANIZATIONS_SUCCESS,
  ORGANIZATIONS_FETCH_ORGANIZATIONS_FAILED,
  ORGANIZATIONS_CREATE_ORGANIZATION,
  ORGANIZATIONS_CREATE_ORGANIZATION_SUCCESS,
  ORGANIZATIONS_CREATE_ORGANIZATION_FAILED,
  ORGANIZATIONS_GET_CURRENT_ORGANIZATION,
  ORGANIZATIONS_CLEAR,
} from "../types/organizations";

export const fetchOrganizations = createAction(ORGANIZATIONS_FETCH_ORGANIZATIONS);
export const fetchOrganizationsFailed = createAction(
  ORGANIZATIONS_FETCH_ORGANIZATIONS_FAILED,
  (payload) => payload,
);
export const fetchOrganizationsSuccess = createAction(
  ORGANIZATIONS_FETCH_ORGANIZATIONS_SUCCESS,
  (payload) => payload,
);

export const createOrganization = createAction(
  ORGANIZATIONS_CREATE_ORGANIZATION,
  (payload) => payload,
);
export const createOrganizationFailed = createAction(
  ORGANIZATIONS_CREATE_ORGANIZATION_FAILED,
  (payload) => payload,
);
export const createOrganizationSuccess = createAction(
  ORGANIZATIONS_CREATE_ORGANIZATION_SUCCESS,
  (payload) => payload,
);

export const getCurrentOrganization = createAction(
  ORGANIZATIONS_GET_CURRENT_ORGANIZATION,
  (payload) => payload,
);

export const organizationsClear = createAction(ORGANIZATIONS_CLEAR);
