loadCustomer();

function loadCustomer(){
  fetch("http://localhost:8080/customer/get-all")
  .then(res=>res.json())
  .then(data=>{
    console.log(data)

    let tableRow=`
        <tr>
          <td><b>Customer ID</b></td>
          <td><b>Customer Name</b></td>
          <td><b>Customer Address</b></td>
          <td><b>Salary per Month</b></td>
          <td><b>Action</b></td>
        </tr>
      
    `;

    let customerTable = document.getElementById("tblCustomers");

    data.forEach(customer => {
      tableRow+=`
        <tr>
          <td>${customer.id}</td>
          <td>${customer.name}</td>
          <td>${customer.address}</td>
          <td>${customer.salary}</td>
          <td><button onclick="deleteCustomer(${customer.id})" class="btn btn-danger">Delete</button> <button onclick="updateCustomer(${customer.id}, '${customer.name}', '${customer.address}', ${customer.salary})" class="btn btn-warning">Update</button> </td>
        </tr>
      `;
    });

    customerTable.innerHTML=tableRow;

  })
}


function deleteCustomer(id){
  if(confirm("Are you sure you want to delete this customer?")){  
    const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };
    
    fetch(`http://localhost:8080/customer/delete/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          alert("Customer deleted successfully");
          loadCustomer();
        } else {
          alert("Failed to delete customer");
        }
      })
      .catch((error) => console.error(error));
  }
}


function updateCustomer(id, name, address, salary){

  const customer = {
    id: id,
    name: name,
    address: address,
    salary: salary
  };

  localStorage.setItem("editCustomer", JSON.stringify(customer));

  window.location.href = "customerForm.html";
    
}



