const fs = require('fs');

function week2Reset() {
	// clear out the pool images
	fs.readdir("./files", (err1, pool_folders) => {
		for(let p in pool_folders) {
			let pool_folder_name = pool_folders[p];
			if(!pool_folder_name.match(/pool/i))
				continue;
			fs.readdir("./files/" + pool_folder_name, (err2, set_folders) => {
				for(let s in set_folders) {
					let fn = "./files/" + pool_folder_name + "/" + set_folders[s];
					if(fn.match(".txt")) {
						continue;
					}
					else{
						fs.rm(fn, {recursive: true, force:true}, (er) => {
							if(er)
								console.log(er);
						});
					}
				}
			})
		}
	})
}
function newFTReset() {
	// reset everything
	fs.rm("./files", {recursive: true, force:true}, (er) => {
		if(er)
			console.log(er);
		fs.mkdir(__dirname + "/files", (err) => {
			if(err)
				console.log(err);
		})
	})
	fs.rm("./final/pics", {recursive: true, force:true}, (er) => {
		if(er)
			console.log(er);
	})
}

if(process.argv.includes("--reset")) {
	newFTReset();
}
else{
	week2Reset();
}
