
const imageUploadFunc = ()=> {
    // Plugin function to initialize image upload functionality
    function ImageUpload(inputSelector, previewSelector) {
      const fileInput = document.querySelector(inputSelector);
      const preview = document.querySelector(previewSelector);
  
      // Handle file input change event
      fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) { 
          const reader = new FileReader(); 
      
          // Load the image file as a data URL
          reader.onload = function(e) { 
            preview.innerHTML = `<img class='object-fit' src="${e.target.result}" alt="Image Preview">`;
          };
  
          reader.readAsDataURL(file);
        } else {
          preview.innerHTML = 'No image selected';
        }
      });
    }
  
    // Initialize the image upload plugin
    ImageUpload('#fileInput', '#preview');
  }
  


  imageUploadFunc()























// ....................................................................

// (function() {
//     // Plugin function to initialize image upload functionality
//     function ImageUpload(inputSelector, previewSelector) {
//       const fileInput = document.querySelector(inputSelector);
//       const preview = document.querySelector(previewSelector);
  
//       // Handle file input change event
//       fileInput.addEventListener('change', function(event) {
//         const file = event.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//           const reader = new FileReader();
  
//           // Load the image file as a data URL
//           reader.onload = function(e) {
//             preview.innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
//           };
  
//           reader.readAsDataURL(file);
//         } else {
//           preview.innerHTML = 'No image selected';
//         }
//       });
//     }
  
//     // Initialize the image upload plugin
//     ImageUpload('#fileInput', '#preview');
//   })();
  


//   function uploadImage(file) {
//     const formData = new FormData();
//     formData.append('image', file);
  
//     fetch('/upload-endpoint', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error uploading image:', error));
//   }
  
//   fileInput.addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith('image/')) {
//       const reader = new FileReader();
  
//       reader.onload = function(e) {
//         preview.innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
//       };
  
//       reader.readAsDataURL(file);
//       uploadImage(file); // Call the upload function
//     } else {
//       preview.innerHTML = 'No image selected';
//     }
//   });
  