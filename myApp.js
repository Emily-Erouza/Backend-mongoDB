require('dotenv').config();
const dotenv= require("dotenv");
// dotenv.config((path:'sample.env'));

const mongoose = require('mongoose');
  
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// create model
let peopleSchema = new mongoose.Schema({
name : {type: String, required: true},
  age : Number,
  favouriteFoods : [string]
  
})
let Person = mongoose.model('person',peopleSchema)

// create and save record of model
const createAndSavePerson = (done) => {
    let Thomas = new Person({name : 'Thomas', age: 11 , favouriteFood['hamburger']})
  Thomas.save((error.data) ) => {
    if(error){
      console.log(error)
    }else{
      done(null,data);
    }
    // });

};

// Create Many Records with model.create()
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayofPeople, function(err,people))
  if (err) return console.log(err);              
  done(null,people);
// });
 
};

// Use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {
Person.find({name: personName},(error, peopleFound)) => (
  if (error) console.log(error) ;
  done(null, peopleFound);
// });

};

const findOneByFood = (food, done) => {
  Person.findOne({favouriteFood: food}, (err, foodPerson) => {
    if (err) return console.log(err);
  done(null,foodPerson);
  // )};
};

// Use model.findById() to Search Your Database By _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, individual) => {
    if (err) return console.log(err);
  done(null, individual);
  });
}
// Perform Classic Updates by Running Find, Edit, then Save
const findEditThenSave = (personId, done) => {
  // const foodToAdd = "hamburger";
Person.findById(personId,(err,person) =>{
  if (error) return console.log(error);
  person.favouriteFood.push('hamburger')

  person.saver((err,data) =>{
    if (err) return console.log(err);
  done(null , data);
    
  }); 
});
              
};

// Perform New Updates on a Document Using model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  // const ageToSet = 20;
let query = {name: personName};
  let update ={age: 20};
  let option = {new : true};

  person.findOneAndUpdate(query,update,option(error,individual) => {
    if (error) return console.log(error);
  done(null, individual);
            });
};

// Delete One Document Using model.findByIdAndRemove
const removeById = (personId, done) => {
person.findByIdAndRemove(personId, function(error,personToRemove)  {
  if (error) return console.log(error);
  done(null, personToRemove);
  
});
};
// Delete Many Documents with model.remove()
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  
Person.remove({name: nameToremove},(error, removalInfo) => {
  if (error) return console.log(error),
  done(null, removalInfo);
});
             
};
// Chain Search Query Helpers to Narrow Search Results
const queryChain = (done) => {
  // const foodToSearch = "burrito";
person.find({favouriteFood: 'burrito'}) 
       .sort({name:'asc'})
      .limit({'2'})
      .select({age: 0})
      .exect({error,searchResults}) => {
  done(null, searchResults);
  
      // });
};

/** # MONGOOSE SETUP #
/*  ================== */

/** 1) Install & Set up mongoose */




/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
 