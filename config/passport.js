const jwtStrategy=require("passport-jwt").Strategy;
const extractJwt=require("passport-jwt").ExtractJwt;
const mongoose=require("mongoose");
const student=mongoose.model('students');
const keys=require("../config/keys");

const opts ={};

opts.jwtFromRequest= extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=keys.secretOrKey;

module.exports = (passport) => {
    passport.use(new jwtStrategy(opts,(jwt_payload,done) =>{
    student.findById(jwt_payload.id)
     .then(user =>{
        if(user){
             return done(null,user);
        }
        return done(null,false);
      })
      .catch(err => conseol.log(err))
    }) );
}