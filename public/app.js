// const apiUrl = 'http://localhost:3000/api/santri';

// async function fetchSantri() {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     const tbody = document.querySelector('#santri-table tbody');
//     tbody.innerHTML = '';
//     data.forEach((santri) => {
//         tbody.innerHTML +=`
//         <tr>
//         <td>${santri.id}</td>
//         <td>${santri.nama}</td>
//         <td>${santri.email}</td>
//         <td>${santri.phone}</td>
//         <td>${santri.almat}</td>
//         <td>
//         <button onclick="deleteSantri(${santri.id})">Hapus</button>
//         </td>
//         </tr>
//         `;
//     });
// }

// async function addSantri(e) {
//     e.preventDefault();
//     const nama = document.querySelector('#nama').value;
//     const email = document.querySelector('#email').value;
//     const phone = document.querySelector('#phone').value;
//     const alamat = document.querySelector('#alamat').value;

//     await fetch(apiUrl, {});
// }