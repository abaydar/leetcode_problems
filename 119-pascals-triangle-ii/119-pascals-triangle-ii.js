/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let triangle = new Array(rowIndex+1)
    
    for(let i=0;i<rowIndex+1;i++){
        let row = new Array(i+1)
        row[0] = 1
        row[row.length-1] = 1
        
        for(let j=1; j<row.length-1; j++){
            let prevRow = triangle[i-1]
            row[j] = prevRow[j] + prevRow[j-1]
        }
        triangle[i] = row
    }
    
    return triangle[rowIndex]
    
};