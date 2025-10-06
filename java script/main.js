var siteName=document.getElementById("bookmarkName");
var siteUrl=document.getElementById("bookmarkURL");
var siteList=[];
if( localStorage.getItem("siteList")){
    siteList=JSON.parse(localStorage.getItem("siteList"));
    display();
}
function addSite(){
    var site={
    name:siteName.value,
    URL:siteUrl.value,
};
siteList.push(site);
localStorage.setItem("siteList",JSON.stringify(siteList));
display();
reset();


}
function reset() {
    siteName.value="";
    siteUrl.value="";
}
function display(){
    var cartona="";
    for(var i=0;i<siteList.length;i++)
    {
        cartona+=`
        <tr>
                <td>${i+1}</td>
                <td>${siteList[i].name}</td>              
                <td>
                  <button class="btn btn-success" onclick="visitSite(${i})">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger" onclick="deleteSite(${i})">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
            </tr>
        `
    }
    document.getElementById("tableContent").innerHTML=cartona;
}
function deleteSite(_index){
    siteList.splice(_index,1);
    localStorage.setItem("siteList",JSON.stringify(siteList));
    display();
}
function visitSite(index){
    
        window.open(siteList[index].URL,"_blank");
}