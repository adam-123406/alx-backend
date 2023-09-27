import { createClient } from 'redis';
const redis = require('redis')
const client = createClient();

(async () => {
    client.on('error', (err) => console.log("Redis client not connected to the server:", err));
    client.on('connect', ()=> console.log("Redis client connected to the server"));
  })();

const holberton = {
    Portland:50,
    Seattle:80,
    'New York':20,
    Bogota:20,
    Cali:40,
    Paris:2
}

for (const [key, value] of Object.entries(holberton)) {
    client.hset('HolbertonSchools', key, value, redis.print);
}

client.hgetall('HolbertonSchools', (err, obj) =>
 {
    if (obj) {
        console.log(obj);
    }
    else {
        console.log(err);
    }
 });
