const mapString = (body) => {
  const mykeys = Object.keys(body)
    .map((key) => key)
    .join(",");

  const values = Object.keys(body)
    .map((key) => body[key])
    .join(",");

  return `(${mykeys}) VALUES (${values})`;
};

console.log(mapString({ test: "test", test1: "test1" }));

const myUser = {
  googleId: "user.uid",
};

Object.assign(myUser, { email: "user.email" });

console.log(myUser);
