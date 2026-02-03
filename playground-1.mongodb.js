// show databases
use('aula')

// db.people.insertOne({
//     name: "thais",
//     lastname: "michel",
//     salary: 5
// })

// let pessoa = {
//     nome: "helo",
//     idade: 17
// }

// db.people.insertOne(pessoa)

// const pessoas = [
//     {
//         name: "helo",
//         lastname: "linda",
//         salary: 5
//     },
//     {
//         name: "beca",
//         lastname: "linda",
//         salary: 5
//     },
//     {
//         name: "thais",
//         lastname: "schitz",
//         salary: 5
//     },
//     {
//         name: "fehfita",
//         lastname: "esquisita",
//         salary: 5
//     },
//     {
//         name: "joy",
//         lastname: "linda",
//         salary: 5
//     },
//     {
//         name: "kessy",
//         lastname: "linda",
//         salary: 5
//     },
//     {
//         name: "kety",
//         lastname: "linda",
//         salary: 5
//     },
//     {
//         name: "lays",
//         lastname: "linda",
//         salary: 5
//     },
//     {
//         name: "juju",
//         lastname: "linda",
//         salary: 5
//     },
//     {
//         name: "bruna",
//         lastname: "linda",
//         salary: 5
//     }
// ]
// db.people.insertMany(pessoas)

// db.people.find({ name: /^t.*s$/ })

// db.people.find({ $and: [{ name: "thais" }, {salary: 5 }] })

// db.people.find({ salary: {$gte: 2} }, { name: 1, lastname: 1})

db.people.updateOne(
    { _id: ObjectId('6981f6f2efa1e741c627cf51') },
    { $set: { name: "alterado"} }
)

db.people.updateMany(
    { salary: 5 },
    { $set: { salary: 12345} }
)

db.people.deleteMany({ name: /b/ })

