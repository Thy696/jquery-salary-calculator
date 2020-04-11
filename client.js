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

    // $(".input").prop("required", true);

    displayEmployee();
    calculateTotal();
    // x();
} // end addEmployee


let deleteButton = $("<tr><th><button id ='deleteBtn' >Delete</button></th></tr>");

function displayEmployee() {
    let el = $('#tableBody');
    el.empty();
    // let deleteButton = $("<button id ='btn' class='btn btn - secondary'>Delete</button>");
    // let deleteButton = $("<p>wefwf</p>");
    for (let employee of employeeArray) {
        let tr = $(`<tr><th>${employee.firstName}</th><th>${employee.lastName}</th><th>${employee.id}</th><th>${employee.title}</th><th>${employee.annualSalary}</th></tr>`);
        $('#tableBody').append(tr);

        tr.append(deleteButton);


    }//end for loop

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





function deleteByBtn() {
    console.log('Click a list item!');
    // for (let employee of employeeArray) {
    //     let tr1 = $(`<tr><th>${employee.firstName}</th><th>${employee.lastName}</th><th>${employee.id}</th><th>${employee.title}</th><th>${employee.annualSalary}</th></tr>`);
    //     tr1.remove();
    // }//end for loop

    $('#hi').remove();

}

function readyNow() {
    $('#btn').on('click', addEmployee);
    $('#deleteBtn').on('click', deleteByBtn);


}
