import { createClient } from 'redis';
const redis = require('redis')
const client = createClient();

(async () => {
    client.on('error', (err) => console.log("Redis client not connected to the server:", err));
    client.on('connect', ()=> console.log("Redis client connected to the server"));
  })();

function setNewSchool(schoolname, value) {
    client.set(schoolname, value, redis.print);
  }

  async function displaySchoolValue(schoolname) {
    client.get(schoolname, redis.print);
  }

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
