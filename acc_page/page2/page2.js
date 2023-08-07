document.getElementById("serIconBtn").addEventListener("click", ()=> {
    document.getElementById("searchDiv").classList.add("openSearchDiv")
})

document.getElementById("navBackBtn").addEventListener("click", ()=> {
    document.getElementById("searchDiv").classList.remove("openSearchDiv")
})