

async function main(){

	console.log("One");
	document.getElementById("Output").innerText = "Hello, is this working? 2";
	console.log("Hello");


 	//const url = "https://database.elieichner.com";
    const url = "https://collate-database-worker.elijah-eichner.workers.dev/";

    const init = {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    };

    const response = await fetch(url, init);
	var json = await response.json();
	console.log(json["message"]);
	console.log(json["number"]);
	console.log(json["float"]);
	console.log(json["api"]);
}

