/* eslint-disable prettier/prettier */
require('dotenv').config();
const { networkInterfaces } = require('os');



export class Env{
    env(){
        
       return { URI:process.env.DB,PORT:process.env.PORT}

    }

    ip(){

      
      const nets = networkInterfaces();
      const results = Object.create(null); // Or just '{}', an empty object
      
      for (const name of Object.keys(nets)) {
          for (const net of nets[name]) { 
              const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
              if (net.family === familyV4Value && !net.internal) {
                  if (!results[name]) {
                      results[name] = [];
                  }
                  results[name].push(net.address);
              }
          }
      }
      
      const ans = results ;
      return JSON.stringify(ans)

 
 
    }
}