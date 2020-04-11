$(readyNow);


employeeArray = [];
price = 0;
function addEmployee() {
    console.log('in addEmployee');
    const newEmployeeObject = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idNumberInput,
        title: titleInput,
        annualSalary: annualSalaryInput,
    };

    newEmployeeObject.firstName = $('#firstNameInput').val();
    newEmployeeObject.lastName = $('#lastNameInput').val();
    newEmployeeObject.id = $('#idNumberInput').val();
    newEmployeeObject.title = $('#titleInput').val();
    newEmployeeObject.annualSalary = $('#annualSalaryInput').val();

    employeeArray.push(newEmployeeObject);

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
        let tr = $(`<tr class = 'bla'><th>${employee.firstName}</th><th>${employee.lastName}</th><th>${employee.id}</th><th>${employee.title}</th><th>${employee.annualSalary}</th></tr>`);
        $('#tableBody').append(tr);
        let deleteButton = $("<tr><th><button id ='deleteBtn' >Delete</button></th></tr>");
        tr.append(deleteButton);
        $("#tableBody").on("click", "#deleteBtn", function () {
            $(this).closest(".bla").remove();
            // employeeArray.pop();
        })
    }//end for loop
    

}




function readyNow() {
    $('#btn').on('click', addEmployee);
    $('.input').mouseenter(buttonMouseEnter);
    $('.input').mouseleave(buttonMouseLeave);

    $('.thead').mouseenter(headerMouseEnter);
    $('.thead').mouseleave(headerMouseLeave);
}



function calculateTotal() {
    console.log('in calculateTotal');
    let totalMoney = 0;
    for (let i = 0; i < employeeArray.length; i++) {
        totalMoney += Number(employeeArray[i].annualSalary);
    }//end for loop
    console.log('total price: ', totalMoney);
    let totalPrices = price + totalMoney;
    let el = $('#totalOutPut');
    el.empty();
    el.append(totalPrices);
    if (totalPrices > 20000) {
        el.css({ 'background-color': 'red' });
    }
}//end calculateTotalPrice
