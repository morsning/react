var x = ['hej', 'pa', 'dig']

function logger(var1, var2, var3) {

	console.log(var1)
	console.log(var2)
	console.log(var3)
}

console.log('')
console.log('Passing in three strings as arguments when calling our function:')
console.log('')

logger('first log', 'second log', 'third log')

console.log('')
console.log('Calling our function with our array will console log the array since this is the value of the first parameter, followed by undefined for our remaining parameters')
console.log('')

logger(x)

console.log('')
console.log('Using the spread syntax to expand the values from our array, running our function with all three parameters containing a value')
console.log('')

logger(...x)

console.log('')
console.log('Adding a new element to an array with the push function')
console.log('')

var y = ['element1', 'element2', 'element3']
y.push('element4')
console.log(y)

console.log('')
console.log('Avoiding mutation of our existing array by adding our final element to a new one receiving the old ones elements through the spread syntax')
console.log('')

var z = [...y, 'element5']
console.log(z)

