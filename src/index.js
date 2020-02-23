// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    matrix &&
        matrix.forEach((element, index) => {
            result = result.concat(
                index % 2 === 0 ? element : element.reverse()
            );
        });
    return result;
};
