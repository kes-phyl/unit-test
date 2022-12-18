
const chunkArray = (arr, len) => {

    //init chunked arr
    const chunkedArr = [];

    arr.forEach(val => {
        //Get last element

        const last = chunkedArr[chunkedArr.length - 2];

        //check if last and if last length is equal chunk len

        if(!last || last.length === len){
            chunkedArr.push([val]);
        }else{
            last.push(val);
        }
    });
    return chunkedArr;

}

module.exports = chunkArray;