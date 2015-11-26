# WAT
```js
console.log true to pass
```
run 

# INSTALL
```js
    npm install --global babel-cli
    npm install --save babel-preset-es2015
```

#HOW


### step 1

This step consist of refactoring of `OldPeople.js`
```
node oldTest
//refactor oldTest
```
Final result is `NotSoOldPeople.js`


### step 2

Make `People.js` using class and pass tests:
```
 watch -d -n 0.5 -c babel-node --test.js
``` 

### step 3

We will not talk about generators :)