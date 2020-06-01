
// Tempo: 25 min.
// Esqueci que tinha que zerar a sub após encontrar uma substring única maior

// const s = "baacab";
const s = "fdsffdifmaoamnqwealll";

function substt(s) {
    let longest = "";

    for (let i=0; i < s.length; i++) {
        let sub = s.charAt(i);
        // console.log(sub);
        // console.log(sub);
        for (let j=0; j < s.length; j++) {
            if (!sub.includes(s.charAt(j))) {
                sub += s.charAt(j);
                // console.log(sub);
            } else {
                if (sub.length >= longest.length) {
                    longest = sub;
                }
                sub="";
            }
        }
        // console.log("inside-if");

    }

    // console.log("longest");
    // console.log(longest);
    return longest;
}

console.log(`longest: ${substt(s)}`);
