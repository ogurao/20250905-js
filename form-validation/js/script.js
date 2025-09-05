$(function(){
    $('.alert').hide(); // エラーメッセージ非表示にする

    // 送信ボタンをクリックした時
    $('form').submit(function(){
        var sendFlag = true;

        // 必須項目のチェック
        // ラジオボタンのチェック
        if($('input[name="radio"]:checked').length == 0){
            $('#radioArea .alert').show();
            sendFlag = false; // falseで送信しない
        }else{
            $('#radioArea .alert').hide();
        }

        // チェックボックスのチェック
        var sadChk = $('input[name="checkbox"]:checked').length;
        if(sadChk == 0){
            $('#checkboxArea .alert').show();
            sendFlag = false;
        }else{
            $('#checkboxArea .alert').hide();
        }

        // セレクトボックスのチェック
        if($('#selectBox').val() == 'none'){
            $('#selectArea .alert').show();
            sendFlag = false;
        }else{
            $('#selectArea .alert').hide();
        }

        // テキストエリアのチェック
        if($('#textArea').val() == ''){
            $('#textAreaArea .alert').show();
            sendFlag = false;
        }else{
            $('#textAreaArea .alert').hide();
        }

        // 送信可否の判定
        if(sendFlag == false){
            return false; // falseで送信しない（送信されない）
        }
    });
});
