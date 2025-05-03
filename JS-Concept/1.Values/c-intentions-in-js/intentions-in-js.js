let obj1 = {
  name: "Mike",
  location: {
    homeAddress: "England"
  }
}

let obj2 = {
  name: "Fred",
  location: obj1.location
}

obj2.location.homeAddress = "France";

console.log(obj1.location.homeAddress); //England \\France
console.log(obj2.location.homeAddress); //France   \\France


// Q1: 
let data1 = {
  info: {
    details: {
      status: 'active',
      meta: {
        timestamp: 12345
      }
    }
  }
};
let data2 = {
  current: data1.info.details
};

data2.current.status = 'inactive';
data2.current.meta.timestamp = 67890;

// What will these print?
console.log(data1.info.details.status);//inactive
console.log(data1.info.details.meta.timestamp);//67890
