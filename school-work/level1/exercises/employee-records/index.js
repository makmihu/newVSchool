const employees = []

function Employee(name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    if(status === undefined){
        this.status = "Full Time"
    }
}

Employee.prototype.printEmployeeForm = function(){
    console.log(
        "Name: " + this.name + "; " +
        "Job Title: " + this.jobTitle + "; " +
        "Salary: " + this.salary + "; " +
        "Status: " + this.status + "; " 
    )
};

var kayla = new Employee("Kayla", "Student", "0/hr", );
var patton = new Employee("Patton", "Pizza Delivery Driver", "15/hr", );
var kenzie = new Employee("Kenzie", "Teacher", "15/hr", "Contract")
 
employees.push(kayla, patton, kenzie)
