const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportTypes = this.journeys.map((journey) => {
    return journey.transport;
  });
  const uniqueTransportTypes = [...new Set(transportTypes)];
  return uniqueTransportTypes;
};



// transport = []
// for each journey if journey.transport != transport.values then add it?


module.exports = Traveller;


// let transport = []
  // const results = journeys.forEach(journey) => {
  //   if(journey.transport != transport.values){
  //     transport.push(journey.transport);
  //   };
  // };
  // return transport;
  // const results = this.journeys.map((journey) => {
  //   if(journey.transport != transport.values){
  //     transport.push(journey.transport);
  //   };
  // })
  // return results