import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         })

//         console.log(expenses)
//     })

// database.ref('expenses')
//     .on('value',
//     (snapshot) => {
//         const expenses = []

//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         })

//         console.log(expenses)
//     })

// database.ref('expenses').push({
//     description: 'Phone',
//     note: 'Phone bill is due at the end of the month.',
//     amount: 4500,
//     createdAt: 48465621514
// })

// database.ref('notes/-LJkoQp3SzMxMjCKsOxo').update({
//     body: 'React, Redux'
// })

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// })

// Firebase Array Structure
// const firebaseNotes = {
//     notes: {
//         sdndffjng: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         sdndfdnhjffjng: {
//             title: 'Second note!',
//             body: 'This is my other note'
//         }
//     }
// }


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// })


// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'Jon Powell',
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: 'Web Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Omaha',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('Failed.', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// })

// database.ref().set('This is my data.')
// database.ref('age').set(27);
// database.ref('location/city').set('New York')

// database.ref('isSingle').remove().then(() => {
//     console.log("Data removed")
// }).catch((err) => {
//     console.log('Did not remove data', err)
// })

// database.ref('isSingle').set(null)