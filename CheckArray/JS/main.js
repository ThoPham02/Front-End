var array = []

function input(){
    let input_number = parseInt(document.getElementById('input_array').value);

    array.push(input_number);
    document.getElementById('input_array').value = '';
}

function result(){
    let chuoi = '';
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        chuoi += ' ' + array[i];
        sum += array[i];
    }
    document.getElementById('result_array').innerHTML = chuoi;

    document.getElementById('result_max').innerHTML = Math.max(...array);
    
    document.getElementById('result_min').innerHTML = Math.min(...array);

    document.getElementById('result_sum').innerHTML = sum;
}

