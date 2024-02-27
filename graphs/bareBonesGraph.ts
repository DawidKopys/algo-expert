const friends = new Map([
  ['Alice', ['Bob', 'Diana', 'Fred']],
  ['Bob', ['Alice', 'Cynthia', 'Diana']],
  ['Cynthia', ['Bob']],
  ['Diana', ['Alice', 'Bob', 'Fred']],
  ['Elise', ['Fred']],
  ['Fred', ['Alice', 'Diana']]
])

console.log('friends.get("Alice") :', friends.get('Alice'))
