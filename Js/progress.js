document.addEventListener('DOMContentLoaded', function () {
    function updateTotal() {
        let totalElement = document.getElementById('total');
        let rowCount = document.getElementById('awardsTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr').length;
        totalElement.innerText = 'Total Awards: ' + rowCount;
    }
    function addAwardTableRow(award, category, year) {
        let table = document.getElementById('awardsTable').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.rows.length);
        //создание ячеек
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);     
        const cell3 = newRow.insertCell(2); 
        const cell4 = newRow.insertCell(3);
        //присваение значение
        cell1.innerHTML = award;
        cell2.innerHTML = category;
        cell3.innerHTML = year;
        cell4.innerHTML = '<button class="editButton" onclick="editRow(this)">Edit</button>';
        //обновление информации
        updateTotal();
    }

    let addAwardButton = document.getElementById('addAwardButton');
    addAwardButton.addEventListener('click', function () {
        addAwardTableRow('New Award', 'New Category', 'New Year');
    });


    window.editRow = function (button) {
        //получение родительской строки
        let row = button.parentNode.parentNode;
        //получение ячеек
        let cells = row.getElementsByTagName('td');

        for (let i = 0; i < cells.length - 1; i++) { 
            let originalText = cells[i].innerText;
            //запрос на новый текст
            let newText = prompt('Edit ' + cells[i].textContent, originalText);
            //если текст не был введен
            if (newText !== null) { 
                cells[i].innerText = newText;
            }
        }
        
    };
});