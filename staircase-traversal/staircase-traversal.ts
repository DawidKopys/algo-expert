// works for maxSteps = 2 only
// export function staircaseTraversal(height: number, maxSteps: number): number {
//   if (height < 3) {
//     return height
//   }
  
//   return staircaseTraversal(height - 2, 2) + staircaseTraversal(height - 1, 2)
// }

export function staircaseTraversal(height: number, maxSteps: number): number {
  // works for maxSteps = 2 only
  if (height <= 1) {
    return 1
  }
  
  // return staircaseTraversal(height - 2, 2) + staircaseTraversal(height - 1, 2)
  let acc = 0
  for (let s = 1; s < Math.min(maxSteps, height) + 1; s++) {
    // if (height === 4 && maxSteps === 3) {
    //   console.log('s :', s)
    // }
    acc = acc + staircaseTraversal(height - s, maxSteps)
  }
  return acc
}
