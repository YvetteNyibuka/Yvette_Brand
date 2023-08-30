document.getElementById("downloadButton").addEventListener("click", function() {
  // Replace "../docs/CV.pdf" with the actual path to your PDF document
  var pdfUrl = "../docs/CV.pdf"; // Update the path to your PDF file
  
  // Create an anchor element to initiate the download
  var link = document.createElement('a');
  link.href = pdfUrl;
  link.target = '_blank'; // Open in a new tab/window
  link.download = 'CV.pdf'; // Change the downloaded file name if needed
  link.click();
});
