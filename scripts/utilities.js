var empty_list = function(list_to_empty,type){
	for(var i=0; i < list_to_empty.length; i++){
		(type == "selector") ? list_to_empty[i].val(""):list_to_empty[i].empty();
	}
}

var lock_list = function(list_to_lock){
	for(var i=0; i < list_to_lock.length; i++){
		list_to_lock[i].prop('disabled', true);
	}
}

var unlock_list = function(list_to_lock){
	for(var i=0; i < list_to_lock.length; i++){
		list_to_lock[i].prop('disabled', false);
	}
}