class RunTracker{
    constructor(name,email){
        this.name =name
        this.email =email
        this.metars =[]
        this.second =[]
        this.date =[]
        this.totalDist=0
        this.totalTime=0
        this.speed=0


    }
    addRun(date ,second,mater){
        this.date.push(date)
        this.second.push(second)
        this.metars.push(mater)
    }
    totalDistance(){
        this.totalDist = this.metars.reduce((prev ,curr) => prev + curr )
       return `${this.totalDist} meters `
    }
    longestDistance(){
        return `${this.metars.reduce((prev ,curr) => prev > curr ? prev:curr )} meters`
    }
    totalTimeTeken(){
        this.totalTime = this.second.reduce((prev , curr) => prev + curr )
        return `${this.totalTime} time taken in second`
    }
    averageSpeed(){
        this.totalTimeTeken()
        this.speed= this.totalDist/this.totalTime
         return `${this.speed} meters per second`
    }

}

runner =new RunTracker("Salman", "Salman@salman.com")

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)
console.log(runner.totalDistance())
console.log(runner.longestDistance())
console.log(runner.averageSpeed())




