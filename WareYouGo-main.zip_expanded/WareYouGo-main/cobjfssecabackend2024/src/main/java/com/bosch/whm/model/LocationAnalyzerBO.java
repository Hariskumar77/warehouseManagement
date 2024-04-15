package com.bosch.whm.model;

import java.util.ArrayList;
import java.util.List;

public class LocationAnalyzerBO {


	List<LocationAnalyzer> list=new ArrayList<LocationAnalyzer>();


	static  {




	}
	public  List<LocationAnalyzer> racksAvailablity()//epic-2

	{
		return list;



		//If there are multiple slots(if rack is zero), system should display all possible locations along with lane, shelf, rack details.



	}



	public void  assignRobot()//epic-2
	{

		try{

			//If there are multiple slots, system should display all possible locations along with lane, shelf, rack details.

		}catch(Exception e){



			// robot malfunctions, its status will be displayed



		}

	}



	public String inBoundScanValidation(LocationAnalyzer analyzer)//epic-2{

	{
		return null;

		// scans the rack & product QR/barcode for validation

	}



	public String inBoundValidateLocation(LocationAnalyzer analyzer)//epic-2{

	{
		return null;

		//validate the temporarily blocked area and if the location matches, it should be saved against the product details

	}



}
