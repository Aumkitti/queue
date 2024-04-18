let queue = [];

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const customerNumber = document.getElementById("customerNumber").value;
  if (customerNumber && queue.length < 5) {
    queue.push(customerNumber);
    document.getElementById("customerNumber").value = ""; 
    updateQueueDisplay();
  } else if (queue.length >= 5) {
    alert("คิวเต็มแล้วจ้า");
  }
});

document.getElementById('dequeueBtn').addEventListener('click', () => {
    if (queue.length > 0) {
        alert('`ถึงคิวที่ : ' + queue.shift());
        updateQueueDisplay();
    } else {
        alert('No more customers in the queue.');
    }
});

function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = `<h3>Queue (${queue.length})</h3>`;
  queue.forEach((customer, index) => {
    queueList.innerHTML += `<p>${index + 1}. ${customer}</p>`;
  });
}


