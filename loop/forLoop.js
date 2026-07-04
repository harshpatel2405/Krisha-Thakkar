/*
1. for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        if (i == 2 && j == 2)
            break;

        if (i == 3 && j == 1)
            continue;

        console.log(i + "-" + j);
    }

    console.log("Done");
}

2. let n = 0;

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        n += i;

        if (n % 3 == 0)
            continue;

        console.log(n);
    }
}
*/

// * Factors
let n = 12
for(let i = 1; i <= n;i++)
{
    if(n % i == 0)
    {
        console.log(i)
    }
}