var arrayofArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// this is called a matrix or grid

// how to log each array individually
    // for(var i = 0; i < arrayofArrays.length; i++){
    //     console.log( arrayofArrays[i] )
    // }
        /**
         * should log
         * [1, 2, 3]
         * [4, 5, 6]
         * [7, 8, 9]
         */

// how to log each part of each array individually
    // for(var i = 0; i < arrayofArrays.length; i++){        this runs 3 times
    //     for(var j = 0; i < arrayofArrays[i].length; j++){  this runs 9 times
    //         console.log( arrayofArrays[i][j] )
    //     }
    // }
        /**
         * should log
         * 1
         * 2
         * 3
         * 4
         * 5
         * 6
         * 7
         * 8
         * 9
         */

// how to log just the number 6
    // console.log( arrayOfArrays[1][2] )

// console.log number 1
    // console.log( arrayofArrays[0][0] )

// console log number 9
    // console.log( arrayofArrays[2][2] )