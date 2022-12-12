function finalPosition(moves){
  let x = 0;
  let y = 0;
  let directions = [];
  for (let i = 0; i <= moves.length; i++) {
    if (moves[i] === 'east') {
      x += 1;
    } else if (moves[i] === 'west') {
      x -= 1;
    } else if (moves[i] === 'south') {
      y -= 1;
    } else if (moves[i] === 'north' ) {
      y += 1;
    }
    directions[0] = x;
    directions[1] = y;
  } return directions;
}
console.log(finalPosition(moves));