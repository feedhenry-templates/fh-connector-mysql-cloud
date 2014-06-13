FORMAT: 1A

# FeedHenry MySQL Connector

The FeedHenry MySQL Connector. For more information on MySQL see: [https://github.com/felixge/node-mysql](https://github.com/felixge/node-mysql).

# Group MySQL Connector API

# MySQL [/cloud/mysql]

MySQL query

## MySQL [POST] 

Send a query to MySQL

+ Request (application/json)
    + Body
            {
              "query": "select * from my_table"
            }

+ Response 200 (application/json)
    + Body
            {
              "column_a": "value",
              "column_b": "value"
            }
