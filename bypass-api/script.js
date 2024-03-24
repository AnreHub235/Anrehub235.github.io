window.onload = function() {
    // Gọi hàm để tải dữ liệu từ API khi trang được tải
    fetchDataFromAPI();
};

function fetchDataFromAPI() {
  function getParameterValue(paramName) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(paramName);
  }
      const codextag = getParameterValue('codex');
  if(codextag) {
    fetch(`https://anrehub235.github.io/bypass-api/codex.html?token=${codextag}`)
    .then(response => response.json())
    .then(response => {
        // Xử lý dữ liệu nhận được từ API
        displayData(response.key);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
  }
}

function displayData(data) {
    // Lấy đối tượng HTML container để hiển thị dữ liệu
    var container = document.getElementById('data-container');
    
    // Tạo HTML để hiển thị dữ liệu, ở đây là một ví dụ đơn giản
    var html = '<ul>';
    data.forEach(item => {
        html += '<li>' + item.name + '</li>';
    });
    html += '</ul>';
    
    // Cập nhật nội dung của container với dữ liệu đã được xử lý
    container.innerHTML = html;
}
