const test = dom.find('#test>.red')[0]
console.log(test)

const testList = dom.find('.red')
console.log(testList)

dom.each(testList, (n) => console.log(n))

//const test1 = dom.find(test1)[0]
//dom.style(test1, { border: '1px solid red', color: 'blue' })

dom.style(test, { border: '1px solid red', color: 'blue' })