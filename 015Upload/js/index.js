const progressBar = document.querySelector('.progress-bar');
const dropRegion = document.querySelector('.drop-region');
const fileInput = document.querySelector('input[type="file"]');
const uploading = document.querySelector('.uploading');
const done = document.querySelector('.done');
const uploadBtn = document.querySelector('.upload-btn');

dropRegion.addEventListener('dragover', dragOver);
dropRegion.addEventListener('dragleave', dragleave);
dropRegion.addEventListener('drop', setFile);
fileInput.addEventListener('change', setFile);
uploadBtn.addEventListener('click', uploadFile);

let file, isUploadPerformed;

function dragOver(e) {
    e.preventDefault();
    this.style.background = "#ddd";
}

function dragleave(e) {
    e.preventDefault();
    this.style.background = "#fff";
}

function setFile(e) {
    e.preventDefault();

    if(e.type === 'drop') {
        if(e.dataTransfer.items) {
            if(e.dataTransfer.items[0].kind === 'file') {
                file = e.dataTransfer.items[0].getAsFile();
            }
        } else {
            file = e.dataTransfer.files[0];
        }
    } else {
        file = this.files[0];
    }
    dropRegion.style.background = '#fff';
    dropRegion.firstElementChild.style.display = 'none';
    dropRegion.lastElementChild.style.display = 'table-cell';
    dropRegion.lastElementChild.textContent = file.name;
}

function uploadFile(e) {
    if (file && !isUploadPerformed) {
        isUploadPerformed = !isUploadPerformed;
        uploadBtn.textContent = 'Uploading...';
        dropRegion.classList.add('fileDropped');
        progressBar.classList.add('transferring');
        uploading.classList.add('transferring');
        setTimeout(() => {
            uploading.classList.add('finished');
            done.classList.add('finished');
            uploadBtn.textContent = 'Done';
        }, 4000);
    }
}