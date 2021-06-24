# 反應速度訓練

## 來源:彈窗部分參考自菜鳥教程,網址如下:https://www.runoob.com/js/js-popup.html 其他部分為原創

## 遊玩方法:

按下開始鍵,彈出窗口,輸入圖片移動速度(若為非數字,則彈出警告窗),
開始遊戲,點擊圖片會增加分數,在30秒內點擊樂多次越好,
時間到了後,會彈出分數,並詢問是否重新再一次,確認則再次請求輸入速度
,取消則停止畫面,結束按鈕能直接重新開始

## 技術手段

開始按鈕:

function button1_click() {
            var picturetime;
            var picturetime = prompt("請輸入圖片速度(毫秒/變換位置)", "1000");
            if (picturetime != null && picturetime != "" && !isNaN(picturetime)) {
                timer = setInterval(function () { mouse() }, picturetime);
                mm = setInterval(function () { time_out() }, 1000);
            }
            else {
                alert("請輸入數字");
            }
        }