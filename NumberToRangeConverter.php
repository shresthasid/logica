<?php

/*
* The following function helps to convert the incremental numbers like 170,171,172
* with gaps like 182,184 to range values like(170-172) and (182-182),(184-184) if 
* the numbers do not have potential range.
* 
* One use case scenario: Dealing with post codes that relies on range check function.
*/

$arrayValues = [170,171,172,173,174,175,176,178,179,181,182,184,185,192,193,272];

function convertToRange(array $array){
	$range = [];
	$start = null;
	$end = null;
	
	foreach($array as $val){
		if(is_null($start)){
			$start = $val;
			$end = $val;
		}elseif($val == $end+1){
			$end = $val;
		}else{
			if($start == $end){
				array_push($range,$start. '-' .$start); //if there is no increment
			}else{
				array_push($range,$start.'-'.$end); //if has incremental value
			}
			$start = $val;
			$end = $val;
		}
	}
	
	if(!is_null($start)){
		if($start == $end){
			array_push($range,$start. '-' .$start); //if there is no increment
		}else{
			array_push($range,$start. '-' . $end); //if has incremental value
		}
		
	}
	
	return json_encode($range);
}


echo convertToRange($arrayValues);
