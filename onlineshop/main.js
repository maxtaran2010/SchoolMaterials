function pay (c, redir_link=null) {
    var obj = document.getElementById('modal1');
    obj.innerHTML = "<div class=\"modal-dialog\">\n" +
        "    <div class=\"modal-content\">\n" +
        "      <div class=\"modal-header\">\n" +
        "        <h1 class=\"modal-title fs-5\" id=\"exampleModalLabel\">Подтвердите...</h1>\n" +
        "        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n" +
        "      </div>\n" +
        "      <div class=\"modal-body\">\n" +
        "          вы уверены, что хотите купить этот продукт стоимостью " + c +" руб?\n" +
        "      </div>\n" +
        "      <div class=\"modal-footer\">\n" +
        "        <button type=\"button\" class=\"btn btn-outline-success\" data-bs-dismiss=\"modal\">Нет</button>\n" +
        "        <button type=\"button\"  data-bs-toggle=\"modal\" data-bs-target=\"#payModal\" onclick=\"pay2('" + redir_link +"');\" class=\"btn btn-danger\">Да</button>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </div>"
}

function pay3 (redir) {
    var obj = document.getElementById('data-area');
    var obj2 = document.getElementById('pay-footer');
    obj.innerHTML = '<div class="d-flex justify-content-center">\n' +
        '  <div class="spinner-border" role="status">\n' +
        '    <span class="visually-hidden">Loading...</span>\n' +
        '  </div>\n' +
        '  <span style="padding-left: 10px">Перевод денег...</span>' +
        '</div>';
        obj2.innerHTML = '<button type="button" class="btn btn-outline-secondary" id="cancel-pay" data-bs-dismiss="modal">Закрыть</button>\n'
    function rickroll(){
        if (!redir.startsWith('$')){
       document.getElementById('cancel-pay').click();
       window.open(redir, '_blank').focus();
        }
        else {
    obj.innerHTML = '<div class="d-flex justify-content-center">\n' +
        '  <span style="padding-left: 10px">' + redir.split('$').pop() +'</span>' +
        '</div>';
        }
    }
    setTimeout(rickroll, 2000);
}

function pay2 (redir) {
    var obj = document.getElementById('payModal')
    obj.innerHTML = '  <div class="modal-dialog">\n' +
        '    <div class="modal-content">\n' +
        '      <div class="modal-header">\n' +
        '        <h1 class="modal-title fs-5" id="exampleModalLabel2">Данные карты</h1>\n' +
        '        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n' +
        '      </div>\n' +
        '      <div class="modal-body" id="data-area">\n' +
        '          Номер карты<br>\n' +
        '      <div class="mb-2">\n' +
        '      <input type="text" class="form-control" placeholder="0000 0000 0000 0000"><br>\n' +
        '      </div>\n' +
        '\n' +
        '          Дата<br>\n' +
        '      <div class="input-group mb-2" style="width: 125px">\n' +
        '      <input type="text" class="form-control" placeholder="мм" aria-label="date 1">\n' +
        '      <span class="input-group-text">/</span>\n' +
        '      <input type="text" class="form-control" placeholder="гг" aria-label="date 2">\n' +
        '    </div>\n' +
        '          СVC-код<br>\n' +
        '      <div class="mb-2">\n' +
        '      <input type="text" class="form-control" placeholder="123"><br>\n' +
        '      </div>\n' +
        '      </div>\n' +
        '      <div class="modal-footer" id="pay-footer">\n' +
        '        <button type="button" class="btn btn-outline-secondary" id="cancel-pay" data-bs-dismiss="modal">Отмена</button>\n' +
        '        <a class="btn btn-success" onclick="pay3(\'' + redir +'\')">Оплатить</a>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>'
}