import { handlerPath } from '@libs/handlerResolver';

//
export const testMain = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'test',
        cors: true,
      }
    }
  ]      
}
export const testTest2 = {
  handler: `${handlerPath(__dirname)}/handler.test2`,
  events: [
    {
      http: {
        method: 'get',
        path: 'test2',
        cors: true,
      }
    }
  ]      
}
export const testTest3 = {
  handler: `${handlerPath(__dirname)}/handler.test3`,
  events: [
    {
      http: {
        method: 'post',
        path: 'test3',
        cors: true,
      }
    }
  ]      
}
//
export const testShow = {
  handler: `${handlerPath(__dirname)}/handler.testShow`,
  events: [
    {
      http: {
        method: 'get',
        path: 'test_show/{id}',
        cors: true,
      }
    }
  ]      
}