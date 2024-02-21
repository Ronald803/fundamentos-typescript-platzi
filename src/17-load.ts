import _ from 'lodash';

const data = [
  {
    username: "osso",
    role: "user"
  },
  {
    username: "chata",
    role: "admin"
  },
  {
    username: "chimpa",
    role: "user"
  }
]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);


