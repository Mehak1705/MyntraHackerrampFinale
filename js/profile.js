document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var fileInput = document.getElementById("file-upload");
    var file = fileInput.files[0];

    if (file) {
      // Simulate an image upload process
      // Here you can handle the file upload with your server-side code
      console.log("File selected:", file.name); // For debugging

      // Redirect to the next page after successful upload
      window.location.href = "nextprofile.html"; // Change to your desired URL
    } else {
      alert("Please select an image file to upload.");
    }
  });
