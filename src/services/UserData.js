export function UserData(action, data){
	let BaseURL = "http://localhost/react-erp/api/index.php";

	return new Promise((resolve, reject)=>{
		fetch(BaseURL+'?action='+action,
		{
			method: 'POST',
			headers:
			{
				'Accept': 'application/json',
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then((response)=> response.json()
			.then((res)=>{
				resolve(res);
			})
		)
		.catch((error)=>{
			reject(error);
		});
	});
}