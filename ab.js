console.log("person1: show ticket");
console.log("person2: show ticket");

const preMovie = async () => {
  const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));
  const addButter = new Promise((resolve, reject) => resolve("butter"));
  const getColdDrinks = new Promise((resolve, reject) =>
    resolve("Cold Drinks")
  );

  let ticket = await promiseWifeBringingTicket;

  let [popcorn, butter, drinks] = await Promise.all([
    getPopcorn,
    addButter,
    getColdDrinks,
  ]);

  console.log(`wife: I have the ${ticket}`);
  console.log("husband: We should go in");
  console.log("wife: No, I am hungry");

  console.log(`husband: I got some ${popcorn}`);
  console.log("husband: We should go in");
  console.log("wife: I need butter on my popcorn");

  console.log(`husband: I got some ${butter}`);
  console.log("husband: Anything else, darling?");
  console.log("wife: Let's go we are getting late");
  console.log("husband: Thank you for the reminder *grins*");

  console.log(`husband: I got some ${drinks}`);
  console.log("husband: Now we're all set!");

  return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log("person4: show ticket");
console.log("person5: show ticket");
