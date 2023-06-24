//stalin sort
const sort = (arr: any[]) => {
    if (arr.length === 0) {
        return [];
    }

    let sorted = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= sorted[sorted.length - 1]) {
            sorted.push(arr[i]);
        }
    }

    return sorted;
}

export default sort;