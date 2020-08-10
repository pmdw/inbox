const assert = require('assert');

const ganache = require('ganache-cli');

const Web3 = require('web3'); //constructor function

//instance of web3
const web3 = new Web3(ganache.provider());

// mocha Functions for general testing
// (1)it[assert and test]  
// (2)describe[group together it(1)] 
// (3)beforeEach [set up ]

// testing class
class Car {
	park (){
		return 'stopped';
	}
	
	drive(){
		return 'vroom';
	}
}

//parameters (test group name, arrow function)
//arrow function is like in line code
describe('CarUnitTest', () => {
			//to test park function
			it('ParkedTest',() =>{
				//test set up park and assertion logic
				const car = new Car();
				assert.equal(car.park(),'stopped');
			})
			it('MovingTest',() =>{
				//test set up drive and assertion logic
				const car = new Car();
				assert.equal(car.drive(),'vroom');
			})
			
		}); //end describe