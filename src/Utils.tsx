// see: https://www.vcalc.com/wiki/Caroline4/Brzycki
// returns a one-rep max 
export function brzycki(weight: number, reps: number): number {
  return weight * (36 / (37 - reps));
}

// returns max weight
export function maxWeight(max: number, reps: number) {
  return max / (36 / (37 - reps));
}

// returns max reps
export function maxReps(max: number, weight: number) {
  return -(36 * weight / max) + 37
}