function compressfile() {

    var fileInput = document.getElementById("file");

    var file = fileInput.files[0];

    if (!file) {
        document.getElementById("message").innerText =
            "Please select a file first.";
        return;
    }

    var zip = new JSZip();

    zip.file(file.name, file);

    zip.generateAsync({ type: "blob" })
        .then(function(blob) {

            var download = document.getElementById("download");

            download.href = URL.createObjectURL(blob);

            download.download = file.name + ".zip";

            download.style.display = "inline-block";

            document.getElementById("message").innerText =
                "File compressed successfully!";

        })
        .catch(function(error) {

            document.getElementById("message").innerText =
                "Error: " + error;

        });
}