$(readyNow);

employeeArray = [];
price = 0;
function addEmployee() {
    console.log('in addEmployee');
    if ($('.input').val() === '') {
        alert('Please fill the form.')
    } else {
        const newEmployeeObject = {
            firstName: $('#firstNameInput').val(),
            lastName: $('#lastNameInput').val(),
            id: $('#idNumberInput').val(),
            title: $('#titleInput').val(),
            annualSalary: $('#annualSalaryInput').val(),
        };
        employeeArray.push(newEmployeeObject);
    }

    //empty inputs after added
    $('.input').val('');

    displayEmployee();
    calculateTotal();

} // end addEmployee

function buttonMouseEnter() {
    $(this).css({ 'border': '1px solid lightgray', 'box-shadow': '1px 1px 10px lightgray' });
}
function buttonMouseLeave() {
    $(this).css({ 'border': '0px solid white' });
}
function headerMouseEnter() {
    $(this).css({ 'color': ' lightgray' });
}
function headerMouseLeave() {
    $(this).css({ 'color': ' white' });
}

function displayEmployee() {
    let el = $('#tableBody');
    el.empty();
    for (let employee of employeeArray) {
        let tr = $(`<tr >
        <th>${employee.firstName}</th>
        <th>${employee.lastName}</th>
        <th>${employee.id}</th>
        <th>${employee.title}</th>
        <th>$${employee.annualSalary}</th>
        <th><button id ='deleteBtn' >Delete</button></th>
        </tr>`);

        $('#tableBody').append(tr);
    }//end for loop

    console.log(employeeArray);
}

function deleteEmployee() {

    $(this).animate({
        opacity: 0.0
    }, 250, function () {
        $(this).parent().parent().remove();
    });
    let x = $(this);
    employeeArray.splice(x, 1);
    return employeeArray;
}


function calculateTotal() {
    console.log('in calculateTotal');
    let totalMoney = 0;
    for (let i = 0; i < employeeArray.length; i++) {
        totalMoney += Number(employeeArray[i].annualSalary) / 12;
    }//end for loop
    console.log('total price: ', totalMoney);
    let totalPrices = price + totalMoney;
    let el = $('#totalOutPut');
    el.empty();
    let textTotal = totalMoney.toFixed(2);
    el.text(textTotal);

    if (totalPrices > 20000) {
        el.css({ 'background-color': 'red' });
    }
}//end calculateTotalPrice

function readyNow() {
    $('#addBtn').on('click', addEmployee);
    $("#tableBody").on("click", "#deleteBtn", deleteEmployee);

    $('.input').mouseenter(buttonMouseEnter);
    $('.input').mouseleave(buttonMouseLeave);

    $('.thead').mouseenter(headerMouseEnter);
    $('.thead').mouseleave(headerMouseLeave);

}