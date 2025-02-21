function searchCustomer(){
  const searchValue = document.getElementById("txtSearch").value;

  const urlId = `http://localhost:8080/customer/search-customer-id?query=${encodeURIComponent(searchValue)}`;
  const urlName = `http://localhost:8080/customer/search-customer-name?query=${encodeURIComponent(searchValue)}`;
  const urlAddress = `http://localhost:8080/customer/search-customer-address?query=${encodeURIComponent(searchValue)}`;
  const urlSalary = `http://localhost:8080/customer/search-customer-salary?query=${encodeURIComponent(searchValue)}`;


  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  Promise.all([
    fetch(urlId, requestOptions).then(response => response.json()),
    fetch(urlName, requestOptions).then(response => response.json()),
    fetch(urlAddress, requestOptions).then(response => response.json()),
    fetch(urlSalary, requestOptions).then(response => response.json())
  ])
  .then(results => {
    const dataId = Array.isArray(results[0]) ? results[0] : [results[0]];
    const dataName = Array.isArray(results[1]) ? results[1] : [results[1]];
    const dataAddres = Array.isArray(results[2]) ? results[2] : [results[2]];
    const dataSalary = Array.isArray(results[3]) ? results[3] : [results[3]];

    const allData = [...dataId, ...dataName, ...dataAddres, ...dataSalary];
    const uniqueData = allData.filter((value, index, self) => 
      index === self.findIndex((t) => (
        t.id === value.id
      ))
    );

    let tableRow = `
      <tr>
        <td><b>Customer ID</b></td>
        <td><b>Customer Name</b></td>
        <td><b>Customer Address</b></td>
        <td><b>Salary per Month</b></td>
        <td><b>Action</b></td>
      </tr>
    `;

    if (uniqueData.length > 0) {
      uniqueData.forEach(customer => {
        tableRow += `
          <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.address}</td>
            <td>${customer.salary}</td>
            <td><button onclick="deleteCustomer(${customer.id})" class="btn btn-danger">Delete</button> <button onclick="updateCustomer(${customer.id}, '${customer.name}', '${customer.address}', ${customer.salary})" class="btn btn-warning">Update</button> </td>
          </tr>
        `;
      });
    } else {
      tableRow += `<tr><td colspan="4" class="text-center">No result found</td></tr>`;
    }

    // Display in the table
    document.getElementById("tblCustomers").innerHTML = tableRow;



  })


  
  /* fetch(url, url1, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data)

    let tableRow=`
        <tr>
          <td><b>Customer ID</b></td>
          <td><b>Customer Name</b></td>
          <td><b>Address</b></td>
          <td><b>Salary</b></td>
        </tr>
    `;

    let customerTable = document.getElementById("tblCustomers");

    if (Array.isArray(data)) {
      data.forEach(customer => {
        tableRow+=`
          <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.address}</td>
            <td>${customer.salary}</td>
          </tr>
        `;
      });
    } else if(data) {
      tableRow+=`
        <tr>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.address}</td>
          <td>${data.salary}</td>
        </tr>
      `;
    } else {
      tableRow += `<tr><td colspan="4" class="text-center">No result found</td><tr>`;
    }

    customerTable.innerHTML=tableRow; 

  }) */
  
  
}