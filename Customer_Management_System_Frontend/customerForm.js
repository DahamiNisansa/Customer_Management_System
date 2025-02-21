function customerDetails() {

  let name = document.getElementById("txtName").value;
  let address = document.getElementById("txtAddress").value;
  let salary = document.getElementById("txtSalary").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const editCustomer = JSON.parse(localStorage.getItem("editCustomer"));
  



  /* // Prepare the request body
  const raw = JSON.stringify({
    "name": name,
    "address": address,
    "salary": salary
  });

  let requestOptions = {
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  }; */


  if(editCustomer) {

    const raw = JSON.stringify({
      "id": editCustomer.id,
      "name": name,
      "address": address,
      "salary": salary
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    /* requestOptions.method = "PUT";
    requestOptions.body = JSON.stringify({
      "id": editCustomer.id,   // Include ID for updating
      "name": name,
      "address": address,
      "salary": salary
    }); */

    fetch(`http://localhost:8080/customer/update-customer`, requestOptions)
      .then((response) => {
        if (response.ok) {
          alert("Customer updated successfully");
          localStorage.removeItem("editCustomer");
          //window.location.href = "index.html";     
        } else {
          alert("Failed to update customer");
        }
      })
      .catch((error) => console.error(error));
  } 



  else {
    //requestOptions.method = "POST";

    const raw = JSON.stringify({
      "name": name,
      "address": address,
      "salary": salary
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:8080/customer/add", requestOptions)
      .then((response) => {
        if (response.ok) {
          alert("Customer added successfully");
          //window.location.href = "index.html"; 
        } else {
          alert("Failed to add customer");
        }
      })
      .catch((error) => console.error(error)); 
  }
}















/* function addCustomer(){
  let name = document.getElementById("txtName").value;
  let address = document.getElementById("txtAddress").value;
  let salary = document.getElementById("txtSalary").value;


  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "name": name,
    "address": address,
    "salary": salary
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:8080/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


} */