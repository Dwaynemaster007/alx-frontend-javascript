// Brand interfaces to create nominal typing
export interface MajorCredits {
  credits: number;
  brand: "majorCredits";
}

export interface MinorCredits {
  credits: number;
  brand: "minorCredits";
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    brand: "majorCredits",
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    brand: "minorCredits",
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, brand: "majorCredits" };
const majorSubject2: MajorCredits = { credits: 4, brand: "majorCredits" };

const minorSubject1: MinorCredits = { credits: 1, brand: "minorCredits" };
const minorSubject2: MinorCredits = { credits: 2, brand: "minorCredits" };

const majorSum = sumMajorCredits(majorSubject1, majorSubject2);
const minorSum = sumMinorCredits(minorSubject1, minorSubject2);

console.log("Major Credits Sum:", majorSum.credits);
console.log("Minor Credits Sum:", minorSum.credits);