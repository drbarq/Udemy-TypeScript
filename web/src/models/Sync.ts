import axios, { AxiosResponse, AxiosPromise } from 'axios';
// import { UserProps } from './User';

interface HasId {
	id: number;
}

export class Sync<T extends HasId> {
	constructor(public rootUrl: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`);
	}

	save(data: T): AxiosPromise {
		const { id } = data;

		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			return axios.post(this.rootUrl, data);
		}
	}
}

// fetch(id: number): void {
//   axios.get(`${this.rootUrl}/${id}`).then((response: AxiosResponse): void => {
//     this.set(response.data);
//   });
// }

// save(data: UserProps): void {
//   const { id } = data;

//   if (id) {
//     // put
//     axios.put(`${this.rootUrl}/${id}`, data);
//   } else {
//     // post
//     axios.post(this.rootUrl, data);
//   }
// }
