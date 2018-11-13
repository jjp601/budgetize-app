const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Jon',
            age: 27
        })
        reject('Something went wrong')
    }, 1500)
    
});

console.log('before')

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error: ', error)
})

console.log('after')