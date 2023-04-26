const indiceSum = (nums: number[], target: number): number => {
    let result: number = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result = i + j;
            }
        }
    }
    console.log(result);
    return result;
};

indiceSum([2.5, 7.5, 11.2, 15.1], 10);
