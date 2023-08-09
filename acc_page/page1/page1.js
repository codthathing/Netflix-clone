document.getElementById("serIconBtn").addEventListener("click", ()=> {
    document.getElementById("searchDiv").classList.add("openSearchDiv")
})

document.getElementById("navBackBtn").addEventListener("click", ()=> {
    document.getElementById("searchDiv").classList.remove("openSearchDiv")
})

let textArray = []
document.getElementById("navSearchBtn").addEventListener("click", ()=> {
    let searchText = document.getElementById("navSearchField").value
    let textObj = {
        id: textArray.length,
        text: searchText
    }
    textArray.unshift(textObj)
    shiftText(textArray)
    localStorage.setItem("textInput", JSON.stringify(textArray))
    searchText = ""
})

function shiftText(textBox) {
    let textDiv = ``
    for(let x = 0; x < textBox.length; x++) {
        textDiv += `
            <div class="searchedMovieDiv">
                <div class="moveDescDiv">
                    <img src="images/mosul.jpeg" alt="" class="movieImage">
                    <p class="movieName">${textBox[x].text}</p>
                </div>
                <p><i class="fa-regular fa-circle-play playBtn"></i></p>
            </div>
        `
    }
    document.getElementById("mainEntryDiv").innerHTML = textDiv
}

let textArrayFromLocal = JSON.parse(localStorage.getItem("textInput"))
if(textArrayFromLocal) {
    let textArray = textArrayFromLocal
    shiftText(textArray)
}