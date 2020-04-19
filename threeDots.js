const ages1 =[12,13,15,14];
const ages2 = [17,16,18];
const ages3 = [19,21,33,56];

const totalAge = [...ages1, ...ages2 ,11, ...ages3];
console.log(totalAge)

const moneys = [300, 4000,4,600];
const takagonarmechine =Math.max(...moneys);
console.log(takagonarmechine);
