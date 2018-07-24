function sayHello(n) {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error('something wrong'))
    }
    setTimeout(function() {
      resolve('hello')
    }, 10000)
  })
}

sayHello(-1).then((text) => {
  console.log(text)
}, (err) => {
  console.log(err)
})

async function test() {
  let text = await sayHello()
  return text
}

test().then((text) => {
  console.log(text)
}, (err) => {
  console.log(err)
})
