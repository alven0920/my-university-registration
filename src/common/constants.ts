export enum StatusCodes {
  InternalServerError = 500,
  UnprocessableEntity = 422,
  NotFound = 404,
  Forbidden = 403,
  Duplicate = 409,
  Unauthorized = 401,
  BadRequest = 400,
  HttpOk = 200,
  NoContent = 204,
}

export enum StatusMessage {
  InternalServerError = 'Internal Server Error',
  UnprocessableEntity = 'Unprocessable Entity',
  NotFound = 'Not Found',
  Forbidden = 'Forbidden',
  Duplicate = 'Conflict / Duplicate Entry Found',
  Unauthorized = 'Unauthorized',
  BadRequest = 'Bad Request',
  HttpOk = 'OK',
  NoContent = 'No Content',
  NoContents = 'No videos Present',
  NoContentProvider = 'Providers not present currently with us.'
}
