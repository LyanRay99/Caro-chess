//TODO: SỬ DỤNG DOM HTML
// function createTables() {
//     let rows = document.formTable.rowName.value;
//     let columns = document.formTable.columnName.value;

//     if (rows > 0 && columns > 0) {
//         let tables = document.createElement('table');
//         tables.setAttribute('class', 'table_class');
//         tables.setAttribute('id', 'tableID');
//         let sections = document.getElementById('sectionID');
//         sections.append(tables);

//         for (let i = 0; i < rows; i++) {
//             let createRow = document.createElement('tr');

//             for (let j = 0; j < columns; j++) {
//                 let createColumn = document.createElement('td');
//                      createColumn.innerText = i + '' + j;
//                 createRow.append(createColumn);
//             }

//             tables.append(createRow);
//         }
//     }
// }

// function createTableOne() {
//     let check_removeOne = document.getElementById('tableID');
//     if (check_removeOne !== null) {
//         check_removeOne.remove();
//     }

//     createTables();
// }

// function removeTables() {
//     let check_removeClass = document.getElementsByClassName('table_class');
//     if (check_removeClass !== null) {
//         check_removeClass.remove();
//     }
// }

// function removeTableOne() {
//     let check_removeID = document.getElementById('tableID');
//     if (check_removeID !== null) {
//         check_removeID.remove();
//     }
// }


//TODO: SỬ DỤNG jQuery
let a = 1; //biến a để check khi push code lên github
function createTables() {
    let rows = $('#rowID').val();
    let columns = $('#columnID').val();
    if (rows > 0 && columns > 0) {
        let tables = document.createElement('table');
        let sections = $('#sectionID');
        sections.append(tables);
        for (let i = 0; i < rows; i++) {
            let createRow = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let createColumn = document.createElement('td');
                // createColumn.innerText = i + '' + j;
                createRow.append(createColumn);
            }
            tables.append(createRow);
        }
    }

    //todo : set Class & id cho <table>
    $('table').addClass('table_class');
    $('table').attr('id', 'tableID');
}

function createOne() {
    removeTableOne();
    createTables();
}

function removeTables() {
    let check_removeClass = $('.table_class');
    if (check_removeClass !== null) {
        check_removeClass.remove();
    }
}

function removeTableOne() {
    let check_removeID = $('#tableID');
    if (check_removeID !== null) {
        check_removeID.remove();
    }
}

$('.button_show').on('click', function () {
    let showTables = $('.table_class');
    showTables.show();
});

$('.button_hide').on('click', function () {
    let hideTables = $('.table_class');
    hideTables.hide();
});

$('.button_toggle').on('click', function () {
    let toggleTables = $('.table_class');
    toggleTables.toggle();
});

isX = true;
$(document).on('click', 'td', function (this_is_td) {

    if ($(this).text() == '' || $(this).text() == undefined) {
        //todo: cách 1
        // if (isX == true) {
        //     $(this).text('X');
        //     isX = false;
        // }
        // else {
        //     $(this).text('O');
        //     isX = true;
        // }

        //todo: cách 2
        $(this).text(isX ? 'X' : 'O');
        isX = !isX;

        //todo: check win/loss
    }
}
);

