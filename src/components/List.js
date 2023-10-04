import React from 'react'
import Person from './Person';

//List Rendering

// function NameList() {
//     const names = ['Bruce','Clark','Diana']
//   return (
//     <div>
//       <h2>{names[0]}</h2>
//       <h2>{names[1]}</h2>
//       <h2>{names[2]}</h2>
//     </div>
//   )
// }

//With Map method

// function NameList() {
//     const names = ['Bruce', 'Clark', 'Diana']
//     const nameList = names.map(name => <h2>{name}</h2>)
//     return <div>{nameList}</div>
// }

// // Another Example 
// function NameList(){
// const personData = [{
//     id : 1,
//     name : 'Bruce',
//     age : 22,
//     Language : 'React' 
// },
// {
//     id : 2,
//     name : 'Clark',
//     age : 25,
//     Language : 'Python' 
// },
// {
//     id : 3,
//     name : 'Diana',
//     age : 28,
//     Language : 'Vue' 
// }
// ];

// const PersonList = personData.map(Person =><h2>I am {Person.name}. I am {Person.age} years old. I know {Person.Language}</h2>) 

// return <div>{PersonList}</div>
// }

//Refactor

function NameList(){
const personData = [{
    id : 1,
    name : 'Bruce',
    age : 22,
    Language : 'React' 
},
{
    id : 2,
    name : 'Clark',
    age : 25,
    Language : 'Python' 
},
{
    id : 3,
    name : 'Diana',
    age : 28,
    Language : 'Vue' 
}
];

const PersonList = personData.map((person,index) => <Person key={person.age} person={person}/> ) 

return <div>{PersonList}</div>
}

export default NameList
