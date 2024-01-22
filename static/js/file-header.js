
let files;
document.addEventListener("DOMContentLoaded", () => {

    const addButton = document.getElementsByClassName('add-button')[0];
    const fileHeader = document.getElementsByClassName('file-header')[0];
    addButton.addEventListener("click", () => {
        let inp = document.createElement('input');
        let fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        inp.addEventListener("keypress", (event) => {
            if(event.keyCode == 13) {
                const name = inp.value;
                inp.style = 'display: none';
                fileItem.innerHTML = name;
            }
        });
        fileItem.append(inp);
        fileHeader.insertBefore(fileItem, addButton);
        trackNameOfFiles();
        console.log(files);
    });

});

let fileContent = {
    name: String,
    content: String
};

function trackNameOfFiles() {
    files = [{name: 'Main.java', content: ''}];
    let fileHeader = document.getElementsByClassName('file-header');
    for(let i = 0; i < fileHeader.length; i++) {
        files.push({
            name: fileHeader[i][0],
            content: ''});
    }
}

function trackContentOfFiles(activeFile) {
    let headerName = activeFile.value;
    console.log(activeFile)
    let text = document.getElementById('code');
    let elm = files.filter(element => element.name == headerName);
    elm.content = text;
}