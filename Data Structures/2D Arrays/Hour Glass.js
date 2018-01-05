/* Function takes in an 2D array, finds the sum for each hourglass and returns the max value

    a b c
      d
    e f g

*/

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    let hourGlassSums = [];
    
    // Get starting position of each hour glass
    for (let j = 0; j < arr.length - 2; j++){
        for (let i = 0; i < arr.length - 2; i++){
           
            hourGlass = [
                arr[j][i], arr[j][i+1], arr[j][i+2],
                arr[j+1][i+1],
                arr[j+2][i], arr[j+2][i+1], arr[j+2][i+2]
                ];
            
            sum = hourGlass.reduce((a,b)=> a + b, 0);
            hourGlassSums.push(sum);
        }
    }
    
    let max = Math.max( ...hourGlassSums );
    console.log(max);

}
