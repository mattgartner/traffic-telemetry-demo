const axios = require("axios");
const PubSub = require('@google-cloud/pubsub');
// Instantiate a pubsub client
const pubsub = new PubSub({});

exports.chicago = (req, res) => {
  const PUBSUB_VERIFICATION_TOKEN = process.env.PUBSUB_VERIFICATION_TOKEN;
  const config = {
    headers: {
      'X-App-Token': process.env.API_TOKEN
    }
  };
  axios
    // .get("https://data.cityofchicago.org/resource/8v9j-bter.json", config)
    .get("https://data.cityofchicago.org/resource/t2qc-9pjd.json", config)
    .then(function (response) {
      console.log("Status: ", response.status); // ex.: 200
      // res.json(JSON.stringify(response.data));
      // res.json(newobj);
      for (i = 0; i < 29; i++) {
        // console.log(response.data[i]);
        pubsub
          .topic("chicago-regional")
          .publish(response.data[i])
          .then(results => {
            const messageId = results[0];
            // console.log(`Call 1 Message ${messageId} published.`);
          });
      }
      // console.log(response.data.length);
      res.json(response.data[0]);
    })
    .catch(console.error);
};

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function getRandomFloat(min, max) {
  const decimals = 1000000;
  const random = Math.random() * (max - min) + min;
  return Math.floor(random*decimals) / decimals;
  // return Math.random() * (max - min) + min;
}
// New York Metro info
// Lower Manhattan = 40.721277, -74.007351
// Times Square= 40.758896, -73.985130
// Upper East = 40.790128, -73.945820
// Upper West = 40.796722, -73.966892

// Couple aves left-right 73.985 -> 74.007
// lower east to 70th st 40.720 -> 40.778

// Denver Metro Info
// Boulder - Pearl St = 40.017809, -105.278860
// Boulder - UC Boulder = 40.006879, -105.263661
// Boulder - Google Office = 40.023828, -105.253295
// Louisville = 39.975272, -105.128529
// Broomfield = 39.917736, -105.082206
// Denver - LoHi = 39.758025, -105.010176
// Denver - Central = 39.750379, -104.991405
// Denver - Univeristy = 39.679332, -104.958318
// Thornton = 39.864311, -104.970395
// Commerce City = 39.803279, -104.936972
// Denver Intl Airport = 39.848883, -104.672604



function simulateTraffic() {
  const random_bus_number = getRandomNumber(100, 120);
  //New York City
  // const streets = ["Main St.", "Broadway", "1st Ave", "5th Ave", "8th Ave", "33rd St", "86th St"];  
  // const random_lat = getRandomFloat(40.720, 40.778);
  // const random_lng = getRandomFloat(-73.985, -74.007);
  // const random_speed = getRandomNumber(5, 45);

  // Denver Metro
  const streets = ["Colfax St", "Market St", "Pearl St", "Walnut St", "US-36", "16th St", "30th St", "I-25", "I-76", "University Ave", "Baseline Rd"];  
  const random_lat = getRandomFloat(39.679, 40.024);
  const random_lng = getRandomFloat(-104.673, -105.279);
  const random_speed = getRandomNumber(10, 70);
  
  const random_street = getRandomNumber(0,(streets.length-1));
  const timestamp = new Date().toISOString();
  const data = {
    "bus": "bus-" + random_bus_number,
    "speed": random_speed,
    "street": streets[random_street],
    "lat": random_lat,
    "lng": random_lng,
    "timestamp": timestamp
  };
  // console.log(JSON.stringify(data));
  // return JSON.stringify(data);
  return data;
}
exports.streaming = (req, res) => {
  const PUBSUB_VERIFICATION_TOKEN = process.env.PUBSUB_VERIFICATION_TOKEN;

  for (i = 0; i < req.query.generate; i++) {
    const data = simulateTraffic();
    // console.log(data);
    pubsub
      .topic("streaming")
      .publish(data)
      .then(results => {
        const messageId = results[0];
        // console.log(`Call 1 Message ${messageId} published.`);
      });
  }
  res.send("ok");
};


// function publishMessage(topicName, data) {
//   // [START pubsub_publish_message]
//   // Imports the Google Cloud client library
//   const PubSub = require(`@google-cloud/pubsub`);

//   // Creates a client
//   const pubsub = new PubSub({});

//   /**
//    * TODO(developer): Uncomment the following lines to run the sample.
//    */
//   // const topicName = 'traffic';
//   // const data = JSON.stringify({ foo: 'bar' });

//   // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
//   const dataBuffer = Buffer.from(data);

//   pubsub
//     .topic(topicName)
//     .publish(dataBuffer)
//     .then(results => {
//       const messageId = results[0];
//       console.log(`Call 3 (function) Message ${messageId} published.`);
//     })
//     .catch(err => {
//       console.error('ERROR:', err);
//     });
//   // [END pubsub_publish_message]
// }

// exports.call2 = (req, res) => {
//   const PUBSUB_VERIFICATION_TOKEN = process.env.PUBSUB_VERIFICATION_TOKEN;
//   // const pubsub = gcloud.pubsub({
//   //   projectId: process.env.GOOGLE_CLOUD_PROJECT
//   // });
//   // const topic = pubsub.topic(process.env.PUBSUB_TOPIC);
//   const config = {
//     headers: {
//       'X-App-Token': 'HksETOd2xvjoVjg2F2HUdwfPH'
//     }
//   };
//   axios
//     .get("https://data.cityofchicago.org/resource/8v9j-bter.json", config)
//     .then(function (response) {
//       console.log("Status: ", response.status); // ex.: 200
//       // res.json(JSON.stringify(response.data));
//       // res.json(newobj);
//       for (i = 0; i < 4; i++) {
//         // console.log(response.data[i]);
//         pubsub
//           .topic("traffic")
//           .publish(JSON.stringify(response.data[i]))
//           .then(results => {
//             const messageId = results[0];
//             console.log(`Call 2 Message ${messageId} published.`);
//           });
//       }
//       // console.log(response.data.length);
//       res.json(response.data[0]);
//     })
//     .catch(console.error);
// };

// exports.call3 = (req, res) => {
//   const data = JSON.stringify({
//     foo: 'bar'
//   });
//   publishMessage("traffic", data);
//   res.send("Message sent");
// }