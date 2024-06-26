import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData 
{
	public sleepStart:Date;
	public sleepEnd:Date;

	constructor(sleepStart:Date, sleepEnd:Date) 
	{
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
		this.loggedAt = sleepEnd;
	}

	override summaryString():string 
	{
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;

		var time_slept = Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
		    
		// Convert to hours and minutes
		return "ID: " + this.getID() + "\nDate: " + this.loggedAt + "\nTime Slept: " + time_slept;
	}

	override dateString():string 
	{
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}
