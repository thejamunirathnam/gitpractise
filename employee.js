
const IS_PRESENT = 1, IS_PART_TIME = 2;
const EMP_RATE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const MAX_HRS_IN_MONTH = 100;

let totalEmpHrs = 0, empDailyWageArr = [];

let empHrs = 0, totalWorkingDays = 0;

// 

let empl=new Employeee().display();
empl.display();



class EmployeeWage {
    

    print() { return "****** Welcome to EmployeeWage! ******"; }

    attendanceCheck(empCheck) {
        switch (empCheck) {
            case 1:
                empHrs = 8;
                break;
            case 2:
                empHrs = 4;
                break;
            case 3:
                empHrs = 0;
                break;
        }
        return empHrs;
    }

    calDailyWage(empHrs) {
        return empHrs * EMP_RATE_PER_HR;
    }

    wageCalculation() {
        while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            totalEmpHrs = totalEmpHrs + this.attendanceCheck(empCheck);
            empDailyWageArr.push(this.calDailyWage(totalEmpHrs));
        }
        let empWage = this.calDailyWage(totalEmpHrs);
        return "\nDAY:" + totalWorkingDays + " EmpHr:" + totalEmpHrs + " EmpWage:" + empWage ;
    }
}

let display = function () {
    console.log("****** Welcome to EmployeeWage! ******");
    let employeeWage = new EmployeeWage().wageCalculation();
    console.log(employeeWage);
}
display();


// module.exports = { display, EmployeeWage };/