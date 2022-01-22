import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
const ObjectID = require('mongodb').ObjectID;
import LibMongo from '../lib/LibMongo';
//
const hello: any = async (event) => {
  const msg = 'OK , test1';
  return formatJSONResponse({
    message:  msg,
    event,
  });
}
export const main = middyfy(hello);
//
const funcTest2: any = async (event) => {
  const msg = 'OK , test2';
  const client = await LibMongo.getClient();
  const dbName = LibMongo.get_db_name();
//console.log(d);
  const collection = client.db(dbName).collection("tasks");
  let items = await collection.find({}).toArray();
console.log( items);
  client.close();  
  return formatJSONResponse({
    message:  msg,
//    event,
    data: items,
  });
}
export const test2 = middyfy(funcTest2);
//
const funcTest3: any = async (event) => {
  const msg = 'OK , test3';
  console.log(event.body);
  const data = event.body;
//console.log(data.title);
  const dbName = LibMongo.get_db_name();
  const client = await LibMongo.getClient();
  const collection = client.db(dbName).collection("tasks");
  const item: any = {
    title: data.title,  
    content: "",
    created_at: new Date(),
  };
  const itemOne = await collection.insertOne(item); 
  item.id = itemOne._id 
  client.close();
/*
*/
  return formatJSONResponse({
    message:  msg,
    //event,
    ret: 'OK',
  });
}
export const test3 = middyfy(funcTest3);
//
const show: any = async (event) => {
  const msg = 'OK , show';
  const id = event.pathParameters.id;
  const where = { _id: new ObjectID(id) }
//console.log("id=", event.pathParameters.id);
  const client = await LibMongo.getClient();
  const dbName = LibMongo.get_db_name();
  const collection = client.db(dbName).collection("tasks");
  const item = await collection.findOne(where) ;
console.log( item);
  client.close();  
  return formatJSONResponse({
    message:  msg,
//    event,
    data: item,
  });
}
export const testShow = middyfy(show);

