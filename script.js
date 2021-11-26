function display_value(num){
    let result = document.querySelector("#result")
    result.value += num
}

function clear_box(){
    document.querySelector('#result').value=" "
} 

function evaluate_expression(){
    let res = document.querySelector('#result')
    let current_value = res.value
    let result = eval(current_value)
    res.value=result
}

function back_space(){
    let res = document.querySelector('#result')
    let current_value = res.value
    res.value=current_value.slice(0,-1)
}