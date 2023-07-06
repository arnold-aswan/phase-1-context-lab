/* Your Code Here */
const createEmployeeRecord=(array)=> {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (array) => {
    return array.map(createEmployeeRecord)
}

const createTimeInEvent = (employeeRecord, dateStamp)=> {
    const [date, time] = dateStamp.split(" ")
    const [year, month, day] = date.split('-')
    const [hour, minute] = time.split(':') 
    
    let record = {
        type: "TimeIn",
        hour: parseInt(time),
        date: {
            year: parseInt(year),
            month: parseInt(month),
            day: parseInt(day),
        },
    }
    return record
}

const createTimeOutEvent = (dateStamp)=> {
    const [date, time] = dateStamp.split(" ")
    const [year, month, day] = date.split('-')
    const [hour, minute] = time.split(':') 
    let record = {}
     record = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: {
            year: parseInt(year),
            month: parseInt(month),
            day: parseInt(day),
        },
    }
    return record
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

