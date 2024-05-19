const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "Please enter your first name!"]
    },
    lastName:{
        type: String,
        required: [true, "Please enter your last name!"]
    },
    email:{
        type: String,
        required: [true, "Please enter an email!"],
        unique: true,
        validate: {
            validator: async function(email) {
                const user = await this.constructor.findOne({ email });
                return !user;
            },
            message: "That email is already registered!"
        }
    },
    password:{
        type: String,
        required: [true, "Please enter a password!"],
        minLength: [6, "Minimum password length is 6 characters"]
    }
},{timestamps: true});

//function fires before the document is stord in the database
userSchema.pre('save', async function(next){
    // console.log('user about to be saved! ' ,this); // you can do something before the doc is saved!....mongoose hooks

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error('Incorrect password');
    }throw Error('Incorrect email');
}

//function fires after the document is stored in the database
userSchema.post('save', function(doc,next){
console.log('new user was created! ',doc); // you can do something after the doc is saved!.... mongoose hooks
next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;