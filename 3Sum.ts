/*
https://leetcode.com/problems/3sum/
*/

function threeSum(nums: number[]): number[][] {
    const sorted = nums.sort((a,b) => {
        return a-b;
    });
    const results = [];
    for(let i = 0; i < sorted.length-2; i++){
        if(i > 0 && sorted[i] === sorted[i-1]) continue;
        let j = i+1;
        let k = sorted.length - 1;
        while (j < k){
            const sum = sorted[i] + sorted[j] + sorted[k];
            if(sum < 0){
                j++;
            } else if(sum > 0){
                k--;
            }
            else {
                results.push([sorted[i], sorted[j], sorted[k]])
                let existingJ = j;
                while(sorted[existingJ] === sorted[j]) ++j;
                let existingK = k;
                while(sorted[existingK] === sorted[k]) --k;
            }
        }
    }

    return results;
};
