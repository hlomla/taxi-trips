module.exports = function TaxiTrips(pool) {
	
    async function insertTrips(routes_id, taxi_id){
        await pool.query('insert into trip(routes_id, taxi_id) values ($1, $2)', [routes_id, taxi_id]);
    };

    async function totalTripCount(){
        console.log(tripCount);
         var tripCount = await pool.query('select * from trip')
         return tripCount.rowCount
    };

    async function findAllRegions(){
        var allRegions = await pool.query('select name from region')
        return allRegions.rows
    };

    async function findTaxisForRegion(){
        await pool.query('select taxi_id from region')
    };

    async function findTripsByRegNumber(reg_number){
        await pool.query('select * from trip where reg_number = $1', [reg_number])
    };

    async function findTripsByRegion(){
        await pool.query('select trip_id from region')
    };

    async function findIncomeByRegNumber(){

    };

    async function findTotalIncomePerTaxi(){

    };

    async function findTotalIncome(){

    };

    async function findTotalIncomeByRegion(){

    };

    return {
    insertTrips,
    totalTripCount,
    findAllRegions,
    findTaxisForRegion,
    findTripsByRegNumber,
    findTripsByRegion,
    findIncomeByRegNumber,
    findTotalIncomePerTaxi,
    findTotalIncome,
    findTotalIncomeByRegion
    }
}