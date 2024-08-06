// generate-ids.js
const { v4: uuidv4 } = require('uuid');

const subscriberId = uuidv4();
const distinctId = uuidv4();

console.log('Subscriber ID:', subscriberId);
console.log('Distinct ID:', distinctId);
