const sort = (arr: any[]) => {
    const newArr: any[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            newArr.push(arr[i + 1]);
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

export default sort;