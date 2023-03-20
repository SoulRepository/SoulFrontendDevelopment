import { IErrorResponse } from '@app/types/httpTypes';

export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

export function isErrorResponse(value: unknown): value is IErrorResponse {
  if (!isObject(value)) {
    return false;
  }

  return 'error' in value &&
    typeof value.error === 'string' &&
    'message' in value &&
    typeof value.message === 'object' &&
    'statusCode' in value &&
    typeof value.statusCode === 'number';
}
