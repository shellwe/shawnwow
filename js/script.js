let qualifications;

fetch('./js/qualifications.json')
.then(response => response.json())
.then(data => qualifications = data)
.then(data => console.log(data));