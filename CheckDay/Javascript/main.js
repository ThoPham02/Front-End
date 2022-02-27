function output_result(){
    let day;
    let month = parseInt(document.getElementById('input_month').value)
    let year = parseInt(document.getElementById('input_year').value)
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
                day = 29;
            }
            else day = 28;
            break;
        default:
            day = 0;
            
    }

    document.getElementById('result').innerHTML = `Tháng ${month} năm ${year} có ${day} ngày`;
}