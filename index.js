var Collection = require('mongodb').Collection;
var ObjectID = require('mongodb').ObjectID;
var __slice = Array.prototype.slice;


function toObjectID(hex) {
    "use strict";

    if (hex instanceof ObjectID) {
        return hex;
    }

    if (!hex || hex.length !== 24) {
        return hex;
    }

    return ObjectID.createFromHexString(hex);
}


// FIND ONE BY ID
// 'id' - a string or ObjectID
// 'callback' - (err, doc)
// See 'findOne' at https://github.com/christkv/node-mongodb-native/blob/master/lib/mongodb/collection.js
Collection.prototype.findById = function () {
    "use strict";

    var args = __slice.call(arguments);
    args[0] = {_id:toObjectID(args[0])};
    this.findOne.apply(this, args);
};


// UPDATE ONE BY ID
// 'id' - a string or ObjectID
// 'doc' - the update hash
// '[options]'
// '[callback]' - (err) Note: required of operation is 'safe'
// See 'update' at https://github.com/christkv/node-mongodb-native/blob/master/lib/mongodb/collection.js
Collection.prototype.updateById = function () {
    "use strict";

    var args = __slice.call(arguments);
    args[0] = {_id:toObjectID(args[0])};
    this.update.apply(this, args);
};


// REMOVE ONE BY ID
// 'id' - a string or ObjectID
// '[options]'
// '[callback]' - (err) Note: required of operation is 'safe'
// See 'remove' at https://github.com/christkv/node-mongodb-native/blob/master/lib/mongodb/collection.js
Collection.prototype.removeById = function () {
    "use strict";

    var args = __slice.call(arguments);
    args[0] = {_id:toObjectID(args[0])};
    this.remove.apply(this, args);
};


// FIND ITEMS
// - 'query'
// - '[options]'
// - 'callback'  - (err, array)
// See 'find' at https://github.com/christkv/node-mongodb-native/blob/master/lib/mongodb/collection.js
Collection.prototype.findItems = function () {
    "use strict";

    var args = __slice.call(arguments);
    var fn = args[args.length - 1];
    args[args.length - 1] = function (err, cursor) {
        if (err) {
            return fn(err);
        }
        cursor.toArray(fn);
    };
    this.find.apply(this, args);
    return this;
};
