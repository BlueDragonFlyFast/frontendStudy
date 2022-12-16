
const $modal = {
    showButton: document.getElementById("show-modal"),
    oFrame: document.getElementById("outFrame"),

    show () {
        this.oFrame.style.display="block";
        this.showButton.disabled = true;
    },

    close () {
        //this.oFrame.style.display="none";
        this.showButton.disabled = false;
        this.oFrame.style.display = "none";
    }
};

//(function () {
    document.querySelector('#show-modal').addEventListener('click', () =>  $modal.show());
    document.querySelector('#close').addEventListener('click', () =>  $modal.close());
//})();

window.onclick = function(event) {
    if (event.target == $modal.oFrame) {
        $modal.close();
    }
}