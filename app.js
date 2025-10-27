let soz = document.getElementById("soz")

let isEdit=-1
function saqlash(){
    let ism = document.getElementById("name").value
    let sana = document.getElementById("sana").value
    arr=JSON.parse(localStorage.getItem("nom"))
    if (arr==null){
        arr=[]
    }

    if(isEdit==-1){
        arr.push(ism)
    }else{
        arr[isEdit]=ism
    }
   
    localStorage.setItem('nom', JSON.stringify(arr))
    document.getElementById("name").value=""
    chiz()
}


function chiz(){
   let ism = JSON.parse(localStorage.getItem("nom"))
   soz.innerHTML=""
   ism.forEach((element,index)=> {
        soz.innerHTML+=`
            <tr class="border-2 p-2">
                <td class="border-2 p-2">${index+1}</td>
                <td class="border-2 p-2"> ${element}</td>
                <td class="border-2 p-2">
                    <button class="btn  bg-green-900 p-0 px-2 rounded-xl text-white" onclick="editData(${index})">edit</button>
                    <button class="btn  bg-red-900 p-0 px-2 rounded-xl text-white" onclick="deleteData(${index})">delete</button>

                </td>   
            </tr>
        `
   });
   
   

}

chiz()



function deleteData(index){   
    let ism = JSON.parse(localStorage.getItem("nom"))
    ism.splice(index,1)
    localStorage.setItem("nom", JSON.stringify(ism))
    chiz()
}

function editData(index){

    let arr = JSON.parse(localStorage.getItem("nom"))
    document.getElementById("name").value=arr[index]
    isEdit=index
}