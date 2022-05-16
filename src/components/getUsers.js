/*
const users=[
    {   id: 1, 
        name: 'User 1'
    },
    {   id: 2, 
        name: 'User 2'
    }
]

export default users;
*/

function getUsers() {
    const users = [];
    let i;
    for (i = 1; i <= 100; i++) {
      users.push({
           id: i, 
           name: 'User ' + i
        });
    }
    return users;
  }
  export default getUsers;