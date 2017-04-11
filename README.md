# FeedHenry MySQL Connector

[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-mysql-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-mysql-cloud)

The FeedHenry MySQL Connector. For more information on MySQL see: [https://github.com/felixge/node-mysql](https://github.com/felixge/node-mysql).

## Group MySQL Connector API

### MySQL Query

|              |              |
|--------------|--------------|
| Endpoint     | /cloud/mysql |
| HTTP Method  | POST         |


#### Request (application/json)

##### Body
 
```shell
{
    "query": "select * from my_table"
}
```

#### Response 200 (application/json)

##### Body
 
```shell
{
    "column_a": "value",
    "column_b": "value"
}
```

## Tests

All the tests are in the "test/" directory. The cloud app is using mocha as the test runner. 

### Unit tests

```shell
npm run unit
```

### Unit coverage

```shell
npm run coverage
```
