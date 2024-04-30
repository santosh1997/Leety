/*
  https://leetcode.com/problems/container-with-most-water/
  #array #greedy #two-pointers
*/

function getLeftMaxima(height: number[], currentIndex: number): number {
    let currentMaxima = height[currentIndex];
    let i = currentIndex;
    let nextMaxima = height.length;
    while(i < height.length){
        i += 1;
        if(height[i] > currentMaxima){
            nextMaxima = i;
            break;
        }
    }
    return nextMaxima;
}

function getRightMaxima(height: number[], currentIndex: number): number {
    let currentMaxima = height[currentIndex];
    let i = currentIndex;
    let nextMaxima = 0;
    while(i > 0){
        i -= 1;
        if(height[i] > currentMaxima){
            nextMaxima = i;
            break;
        }
    }
    return nextMaxima;
}

function getContainerArea(height: number[], leftLocalMaxima: number, rightLocalMaxima: number): number{
    const containerWidth = rightLocalMaxima - leftLocalMaxima;
    const containerHeight = height[leftLocalMaxima] < height[rightLocalMaxima] ? height[leftLocalMaxima] : height[rightLocalMaxima];
    return containerWidth * containerHeight;
}

function maxArea(height: number[]): number {
    let max = 0;
    let leftLocalMaxima = 0;
    let rightLocalMaxima = height.length - 1;
    while(leftLocalMaxima < rightLocalMaxima) {
        const containerArea = getContainerArea(height, leftLocalMaxima, rightLocalMaxima);
        if(containerArea > max)
            max = containerArea;
        if(height[leftLocalMaxima] > height[rightLocalMaxima]){
            rightLocalMaxima = getRightMaxima(height, rightLocalMaxima);
        } else {
            leftLocalMaxima = getLeftMaxima(height, leftLocalMaxima);
        }
    }
    return max;
};
