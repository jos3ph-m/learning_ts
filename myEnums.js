var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["LANE"] = 5] = "LANE";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.LANE;
