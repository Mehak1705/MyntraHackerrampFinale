// custom.js
document.getElementById('file').addEventListener('change', function(event) {
    var preview = document.getElementById('preview');
    var file = event.target.files[0];
    var reader = new FileReader();
  
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
  
    reader.readAsDataURL(file);
  });
  