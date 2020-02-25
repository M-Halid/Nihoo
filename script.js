// const topla = function (firstname, lastname, job, location, keyword) {
   
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.job = job;
//     this.location = location;
//     this.keyword = keyword;
// }
// const al1 = new topla(firstn, lastn, "Istanbul", "NECMI")

// const al2 = new topla("Nihat", "same", "Yalova", "NIHOO")






    


    
    function say() {

    


    const firstn = document.querySelector("#input1").value.toUpperCase()
    const lastn = document.querySelector("#input2").value.toUpperCase()
        if(firstn=="NIHAT"){ if(lastn=="KARA"){
            
            var i = 0;
            i++;
    document.querySelector(".btn-info").innerHTML = i
    
    console.log("#card" + i)

    const show = document.querySelector("#card" + i)
    show.style.display = "block"

    const yaz1 = document.querySelector("#card" + i + ">.card-body>.card-title")
    yaz1.innerHTML = firstn+" "+lastn;
    console.log(firstn+" "+lastn)
    document.querySelector(".card-text").innerHTML="Canim gardasim benim :D"
    document.querySelector(".btn-primary").innerHTML="Senin icin özel bisi var"
  
   

}}}

let videolink= document.querySelector(".btn-primary").setAttribute("onclick","vidyo()")
function vidyo(){
    document.querySelector("#vdo").style.display="block" 
      document.getElementById("bing").play()
      const bekle=setTimeout(function(){   
        let bas=document.querySelector("#lah")
        bas.style.display="inline"
        bas.style.position="inherit"
        bas.style.transition="ease 3s"
        //bas.style.color="#85144bff"
        bas.style.opacity="1"
        },10000);
    } 

function bas2(){
    const mktb= document.querySelector("#vdo1")
    mktb.style.display="block"
    document.getElementById("mekteb").play()
    document.getElementById("bing").style.display="none"
    document.getElementById("lah").innerHTML="Bittiii :))"
}



