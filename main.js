
//                                      search university by name of state        


 let url = "http://universities.hipolabs.com/search?name=";

 let btn = document.querySelector("button");
 
 btn.addEventListener("click", async () => {
     let query = document.querySelector("input").value;
     console.log("Search query:", query); 
     let colArr = await getColleges(query);
     show(colArr);
 });
 
 async function getColleges(query) {
     try {
         let res = await axios.get(url + query);
         return res.data;
     } catch (err) {
         console.log("Error:", err);
     }
 }
 
 function show(colArr) {
     let list = document.querySelector("#list");
     list.innerText = "";
     for (let col of colArr) {
         console.log(col.name, col["state-province"]);
         let li = document.createElement("li");
         li.innerText = `${col.name} - ${col["state-province"] || "N/A"}`;
         list.appendChild(li);
     }
 }