import { Observable } from "rxjs";





export function getContatore(maxSecondi?:number, maxMinuti?:number, maxOre?:number): Observable<{secondi:number,minuti:number,ore:number}> {
	return new Observable( observer => {
		let secondi:number=0;
		let minuti: number=0;
		let ore: number=0;
		let count:number=0;
		
		let timeout= setInterval(() => {
			if( observer.closed ) {
				console.log("fermato per condizione closed:",observer.closed)
				clearInterval(timeout)
			}
			count++;
			secondi=count%60;
			minuti=(Math.floor(count/60)%60);
			ore=Math.floor(count/3600);
			observer.next({secondi,minuti,ore})
			console.log("count=", count)
			if(maxSecondi&&secondi>=maxSecondi){
				if(!maxMinuti||minuti>=maxMinuti){
					if(!maxOre||ore>=maxOre){
						console.log("timeout finito")
						clearInterval(timeout);
						observer.complete();
					}
				}
			}
			if (ore >= 24){
				console.log("fermato per condizione ore>24:",ore>=24)
			
				observer.error("max ore");
				clearInterval(timeout)
			} 
		}, 1)
	})
} 