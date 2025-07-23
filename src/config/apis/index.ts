import { request } from "../services/axios";


export const requestCreateEntities = async (
  entityName: string,
  body: any
): Promise<any> => request(`/${entityName}`, 'POST', body);

export const requestGetEntities = async (
  entityName: string,
  params?: any
): Promise<any> =>
  request(`/${entityName}`, 'GET', undefined, undefined, params);

export const requestDetailEntities = async (
  entityName: string,
  id: string
): Promise<any> => request(`/${entityName}/${id}`, 'GET');

export const requestUpdateEntities = async (
  entityName: string,
  id: string,
  body: any
): Promise<any> => request(`/${entityName}/${id}`, 'PATCH', body);

export const requestDeleteEntities = async (
  entityName: string,
  id: string
): Promise<any> => request(`/${entityName}/${id}`, 'DELETE');
