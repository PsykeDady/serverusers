import { Observable } from "rxjs";


export function getContatore(): Observable<number> {
	return new Observable( observer => {
		let secondi:number=0;
		setInterval(()=> {
			secondi++;
			observer.next(secondi)
		}, 1000)
	})
} 