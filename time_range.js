function setTimeRange(){
	var startHour = parseInt($("#P50_FREIGHT_READY_HOUR").val());
	var startMin = parseInt($("#P50_FREIGHT_READY_MINUTE").val());
	var endMin = undefined;
	var endHour = undefined;

    function pad(endMin) {
		return (endMin < 10) ? ("0" + endMin) : endMin;
	}
    
    
	if (startMin <= 25) {
		endMin = startMin + 30;
		endHour = startHour + 2
	} else if (startMin > 25 && startHour < 21) {
		endMin = startMin - 30;
		endHour = startHour + 3
	} else {
		endMin = 55;
		endHour = 23;
	}

    
	$("#P50_PICKUP_HOUR").val(endHour);
	$("#P50_PICKUP_MINUTE").val(pad(endMin));
};


$("#P50_FREIGHT_READY_HOUR").change(setTimeRange)
$("#P50_FREIGHT_READY_MINUTE").change(setTimeRange)



