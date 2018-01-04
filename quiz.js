const workers = [
    {name:"Sasha Mac",
     pay: 10.00,
     hrs: 72},

    {name:"Bryan Moore",
     pay: 10.00,
     hrs: 55},

    {name:"Mariah Armstrong",
    pay: 10.00,
    hrs: 64},
]

class Payroll{
    constructor(workers){
        this.workers = workers
        this.names= this.getNames(this.workers)
        this.fullTime= this.getFullTime(this.workers)
        this.totalLabor= this.getTotalLabor(this.workers)
    }
    getNames(workers){
        let a = workers.map((worker)=> {
            // console.log(worker.name)
            return worker.name
        })
        return a.sort()
            // console.log(a);
    }
    getFullTime(workers){
        console.log(worker.hrs)
        return hrs.filter((hr)=>{
            return (hrs > 60) ? 1 : 0
        })
    }
    getTotalLabor(hrs){
        let totalhoursworked = worker.reduce((acc,cur,worker)=>{
            return acc + worker.hrs
        },0)
        return `${(totalhoursworked * worker.pay)}`
    }
}

let records = new Payroll(workers)
// console.log(records.getNames)
// console.log(records.getFullTime)
// console.log(records.getTotalLabor)