# ProblemSolvingTask

* The function takes an array of people objects as input, and returns an object with 4 lists A, B, C, and D as described in the problem statement.

* First, the function sorts the people array by age using the sort method and a comparison function.
* Then, the function iterates over each person in the sorted array and assigns them to the appropriate list based on their age and temperature. If their temperature is less than 100, they are assigned to A, B, or C based on their age range. If their temperature is greater than or equal to 100, they are assigned to D.
* Finally, the function sorts the lists A, B, and C by even ages using the % operator and the sort method, and sorts the list D by age. The sorted lists are then returned as an object.