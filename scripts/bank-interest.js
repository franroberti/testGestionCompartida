var decimal_places = 2;			

var populate_banks = function(bank_info,selector){
	$.each(bank_info, function( key, value ) {
    	selector.append($("<option />").val(value).text(key));
	});
}

var calculate_interests = function(mount,tax_rate,months){
	return ((tax_rate * months/100) + 1)*mount ;

}

var calculate_differences_percent = function(tax_rate,months){
	return tax_rate * months;
}

var update_results = function(mount_quantity,month_quantity,bank_selector,final_mount,percent_difference){

	if(!mount_quantity.val() || !month_quantity.val()){
		return;
	}

	var bank_selected_tax = bank_selector.val();
	var total_mount = calculate_interests(mount_quantity.val(),bank_selected_tax,month_quantity.val());
	var difference = calculate_differences_percent(bank_selected_tax,month_quantity.val());

	final_mount.html(Number(total_mount).toFixed(decimal_places));
	percent_difference.html(difference + '%');
}
