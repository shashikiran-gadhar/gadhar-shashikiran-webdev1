module.exports = function (mongoose) {

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        websites: [{type:mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}],
        dateCreated: { type: Date, default: Date.now }
    }, {collection: 'assignmentDB.user'});

    return UserSchema;
};