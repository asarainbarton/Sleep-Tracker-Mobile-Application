import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@capacitor/storage';

@Injectable({
  	providedIn: 'root'
})
export class SleepService 
{
	// private static LoadDefaultData:boolean;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];
	public static sleepDateTime: Date;
	public static sleepMode:boolean = false;

	public addDefaultData() 
	{
		// April 26 data
		this.logOvernightData(new OvernightSleepData(new Date('April 25, 2024 23:00:00'), new Date('April 26, 2024 06:50:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('April 26, 2024 10:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('April 26, 2024 15:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('April 26, 2024 20:00:00')));

		// April 27 data
		this.logOvernightData(new OvernightSleepData(new Date('April 26, 2024 22:45:00'), new Date('April 27, 2024 07:15:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('April 27, 2024 11:30:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('April 27, 2024 16:45:00')));

		// April 28 data
		this.logOvernightData(new OvernightSleepData(new Date('April 27, 2024 23:30:00'), new Date('April 28, 2024 08:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('April 28, 2024 9:30:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('April 28, 2024 14:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('April 28, 2024 19:30:00')));

		// April 29 data
		this.logOvernightData(new OvernightSleepData(new Date('April 28, 2024 22:00:00'), new Date('April 29, 2024 07:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('April 29, 2024 10:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('April 29, 2024 15:00:00')));

		// April 30 data
		this.logOvernightData(new OvernightSleepData(new Date('April 29, 2024 22:09:00'), new Date('April 30, 2024 07:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('April 30, 2024 8:38:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('April 30, 2024 14:18:00')));

		// May 1 data
		this.logOvernightData(new OvernightSleepData(new Date('April 30, 2024 22:44:00'), new Date('May 1, 2024 07:49:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('May 1, 2024 8:07:00')));

		// May 2 data
		this.logOvernightData(new OvernightSleepData(new Date('May 2, 2024 01:23:00'), new Date('May 2, 2024 10:22:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('May 2, 2024 8:07:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('May 2, 2024 12:45:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('May 2, 2024 17:34:00')));

		// May 3 data
		this.logOvernightData(new OvernightSleepData(new Date('May 2, 2024 23:00:00'), new Date('May 3, 2024 07:15:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('May 3, 2024 9:30:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('May 3, 2024 14:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('May 3, 2024 18:30:00')));

		// May 4 data
		this.logOvernightData(new OvernightSleepData(new Date('May 3, 2024 22:30:00'), new Date('May 4, 2024 06:45:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('May 4, 2024 10:15:00')));
		this.logSleepinessData(new StanfordSleepinessData(7, new Date('May 4, 2024 15:45:00')));

		// May 5 data
		this.logOvernightData(new OvernightSleepData(new Date('May 4, 2024 23:15:00'), new Date('May 5, 2024 08:05:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('May 5, 2024 9:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('May 5, 2024 13:20:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('May 5, 2024 16:50:00')));

		// May 6 data
		this.logOvernightData(new OvernightSleepData(new Date('May 5, 2024 22:50:00'), new Date('May 6, 2024 07:30:00')));
		this.logSleepinessData(new StanfordSleepinessData(1, new Date('May 6, 2024 10:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('May 6, 2024 14:30:00')));

		// May 7 data
		this.logOvernightData(new OvernightSleepData(new Date('May 6, 2024 22:50:00'), new Date('May 7, 2024 07:30:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('May 7, 2024 10:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('May 7, 2024 14:30:00')));
		this.logSleepinessData(new StanfordSleepinessData(5, new Date('May 7, 2024 19:00:00')));

		// May 8 data
		this.logOvernightData(new OvernightSleepData(new Date('May 8, 2024 1:50:00'), new Date('May 8, 2024 07:30:00')));
		this.logSleepinessData(new StanfordSleepinessData(6, new Date('May 8, 2024 10:00:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('May 8, 2024 14:30:00')));

		// May 9 data
		this.logOvernightData(new OvernightSleepData(new Date('May 8, 2024 21:50:00'), new Date('May 9, 2024 07:30:00')));
		this.logSleepinessData(new StanfordSleepinessData(3, new Date('May 9, 2024 12:30:00')));

		// May 10
		this.logOvernightData(new OvernightSleepData(new Date('May 9, 2024 23:30:00'), new Date('May 10, 2024 06:50:00')));
		this.logSleepinessData(new StanfordSleepinessData(2, new Date('May 10, 2024 12:30:00')));
	}
	
	async loadData() 
	{
		const { value } = await Storage.get({ key: 'sleepData' });
		if (value) 
		{
			const data = JSON.parse(value);

			if (data.AllOvernightData) 
			{
				SleepService.AllOvernightData = data.AllOvernightData.map((item: any) => 
				{
					var temp_instance:OvernightSleepData = new OvernightSleepData(new Date(item.sleepStart), new Date(item.sleepEnd));
					temp_instance.setLoggedAtDate(new Date(item.loggedAt));
					temp_instance.setID(item.id);

					SleepService.AllSleepData.push(temp_instance);
					return temp_instance;
				}).filter((item: any) => item !== null);
			}

			if (data.AllSleepinessData) 
			{
				SleepService.AllSleepinessData = data.AllSleepinessData.map((item: any) => 
				{
					var temp_instance:StanfordSleepinessData = new StanfordSleepinessData(item.loggedValue, new Date(item.loggedAt));
					temp_instance.setID(item.id);

					SleepService.AllSleepData.push(temp_instance);
					return temp_instance;
				}).filter((item: any) => item !== null);
			}

			SleepService.sleepDateTime = new Date(data.sleepDateTime);
			SleepService.sleepMode = data.sleepMode;
		}
	}

	async saveData() 
	{
		const dataToSave = {
			AllOvernightData: SleepService.AllOvernightData,
			AllSleepinessData: SleepService.AllSleepinessData,
			sleepDateTime: SleepService.sleepDateTime,
			sleepMode: SleepService.sleepMode
		};
		
		await Storage.set({
			key: 'sleepData',
			value: JSON.stringify(dataToSave),
		});
	}

	async clearSleepData() 
	{
        await Storage.remove({ key: 'sleepData' });

        SleepService.AllSleepData = [];
		SleepService.AllSleepinessData = [];
		SleepService.AllOvernightData = [];
    }

	public printDataSummary() 
	{
		console.log(`Total Sleep Data Entries: ${SleepService.AllSleepData.length}`);
	
		const dateTimeString = SleepService.sleepDateTime instanceof Date ? 
							   SleepService.sleepDateTime.toISOString() : 
							   'Not set or not a Date object';

		console.log(`Current Sleep DateTime: ${dateTimeString}`);
		console.log(`Current Sleep Mode: ${SleepService.sleepMode}`);

		this.printAllSleepData();
	}
	
	public logOvernightData(sleepData:OvernightSleepData) 
	{
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) 
	{
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
	}

	public printAllSleepData()
	{
		console.log("All Sleep Data:");
		SleepService.AllSleepData.forEach((data) => {
			console.log(data.summaryString());
		});
	}

	public getCurrentSleepMode() 
	{
		return SleepService.sleepMode;
	}

	public getCurrentSleepDateTime()
	{
		return SleepService.sleepDateTime;
	}

	public setSleepDateTime(dateTime:Date)
	{
		SleepService.sleepDateTime = dateTime;
	}

	public setCurrentSleepMode(mode:boolean)
	{
		SleepService.sleepMode = mode;
	}

	public getTotalSleepDataSize()
	{
		return SleepService.AllSleepData.length;
	}
 }
