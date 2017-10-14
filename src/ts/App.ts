console.log(59);

const u3 = {
    w: 1,
    z : 2,
    x : 12
}

const a = async ()=>{
    console.log("start")
    await new Promise(r => setTimeout(r , 2000));
    console.log("end")
    alert(1)
}

a();

const u4 = {...u3 , w : 7}

const uu = [1,2,3,4,5];
const uu2 = [...uu , 6];

console.log(u4)
console.log(uu2)

