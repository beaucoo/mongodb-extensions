#MongoDB Extensions

Friendly collection extensions for to the [mongodb](https://github.com/mongodb/node-mongodb-native) native driver. Inspired by [MongoSkin](https://github.com/kissjs/node-mongoskin) minus the kitchen sink.

#Download
<pre><code>npm install mongodb-extensions</code></pre>

#Use
After requiring **mongodb** declare:
<pre><code>require('mongodb-extensions');</code></pre>

#Documentation
The following are added to the mongodb native driver **Collection** prototype
## findById(id, options, callback)
Equivalent to calling **mongodb's** [findOne](https://github.com/mongodb/node-mongodb-native#data-types) with <code>{_id:[ObjectId]}<code>
For **id** pass one of:

* ObjectID
* 24 character length hex string
* Proprietary ID string

Returns <code>callback(err, doc)</code>

## updateById(id, doc, options, callback)
Equivalent to calling **mongodb's** [update](https://github.com/mongodb/node-mongodb-native#update-update-and-insert-upsert) with <code>{_id:[ObjectId]}<code>
For **id** pass one of:

* ObjectID
* 24 character length hex string
* Proprietary ID string

Returns <code>callback(err, success=true/false)</code>

## removeById(id, options, callback)
Equivalent to calling **mongodb's** [remove](https://github.com/mongodb/node-mongodb-native#update-update-and-insert-upsert) with <code>{_id:[ObjectId]}<code>
For **id** pass one of:

* ObjectID
* 24 character length hex string
* Proprietary ID string

Returns <code>callback(err, success=true/false)</code>

## findItems(query, options, callback)
Equivalent to calling **mongodb's** [find](https://github.com/mongodb/node-mongodb-native#find) but returning all found items in an array.

Returns <code>callback(err, array)</code>

##License
(The MIT License)

Copyright (c) 2012-20* BeauCoo Technologies Inc. <info@beaucoo.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

