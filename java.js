document.getElementById("registerform").addEventListener("submit", function(e) {
e.preventDefault();
if (!document.getElementById("agree").checked) {
alert("Harap setujui syarat & ketentuan."); return;
}
const nama = document.getElementById("nama").value;
const email = document.getElementById("email").value;
const tanggal = document.getElementById("tanggal").value;
const nomor = document.getElementById("nomor").value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const row = document.getElementById("data_table").getElementsByTagName("tbody")[0].insertRow();
row.insertCell(0).textContent = nama;
row.insertCell(1).textContent = email;
row.insertCell(2).textContent = tanggal;
row.insertCell(3).textContent = gender;
row.insertCell(4).textContent = nomor;
this.reset();
});
document.getElementById("openModal").onclick = () => {
document.getElementById("termsModal").style.display = "flex";
};
document.getElementById("closeModal").onclick = () => {
document.getElementById("termsModal").style.display = "none";
};
window.onclick = e => {
if (e.target === document.getElementById("termsModal")) {
document.getElementById("termsModal").style.display = "none";
}
};