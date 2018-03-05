var Schema = {};
schema.createSchema = function(mongoose) {
    var UserSchema = mongoose.Schema({
        id: {type: String, required: true, unique: true, 'default': '' },
        name: {type:String,required: true, 'default': ''},
        password: {type:String, required: true, 'default': '' },
        create_at: {type: Date, index: {unique: false}, 'default': Date.now},
        update_at: {type: Date, index: {unique: false}, 'default': Date.now}
    });
    return UserSchema;
};
module.exports = Schema;