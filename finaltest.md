# 反應速度訓練

## 來源:彈窗部分參考自菜鳥教程,網址如下:https://www.runoob.com/js/js-popup.html 其他部分為原創

## 遊玩方法:

按下開始鍵,彈出窗口,輸入圖片移動速度(若為非數字,則彈出警告窗),
開始遊戲,點擊圖片會增加分數,在30秒內點擊樂多次越好,
時間到了後,會彈出分數,並詢問是否重新再一次,確認則再次請求輸入速度
,取消則停止畫面,結束按鈕能直接重新開始

## 技術手段

開始按鈕的觸發:

 * prompt為觸發一個可輸入的彈跳視窗
 * if內為防止用戶輸入空值,空白(因為isNaN會將空值空白視為0,所以必須一起判斷)和非數字的內容
 * 時間觸發 圖片位置,時間倒數(下方介紹)

```{r}
function button1_click() {
            picturetime = prompt("請輸入圖片速度(毫秒/變換位置)", "1000");
            if (picturetime != null && picturetime != "" && !isNaN(picturetime)) {
                timer = setInterval(function () { mouse() }, picturetime);
                mm = setInterval(function () { time_out() }, 1000);
            }
            else {
                alert("請輸入數字");
            }
        }
```

停止按鈕的觸發:

 * cleanInterval清除計時器,以及速度
 * 將分數,秒數,位置全部回歸為初始值

```{r}
function button2_click() {
            clearInterval(timer);
            clearInterval(mm);
            c.style.top = 0;
            c.style.left = 0;
            count = 0;
            Settime = 30;
            document.getElementById("scoretext").innerHTML = "點擊次數:0";
            document.getElementById("Check_time").innerText = "30秒";
        }
```

時間倒數:

 * 每次觸發時間-1
 * 並將結果反應在html
 * 如果時間到,將觸發 跳出(下方介紹)

```{r}
function time_out() {
            Settime -= 1;
            Check_time = document.getElementById("Check_time");
            Check_time.innerHTML = Settime + "秒";
            if (Settime == 0) {
                jump();
            }
        }
```

圖片位置:

 * x,y為div框的絕對位置,由math.random去做隨機,使圖片亂跑

```{r}
function mouse() {
            x = parseInt(Math.random() * 900);
            y = parseInt(Math.random() * 600);
            c.style.top = y;
            c.style.left = x;
        }
```

跳出:

 * 遊戲結束,彈跳視窗,並判斷使用者點擊確認或取消(true false)

```{r}
function jump() {
            var r = confirm("你的速度為" + picturetime + "你的分數是:" + count + "分,是否重新開始");
            if (r == true) {
                button2_click();
                button1_click();
            }
            else {
                button2_click();
            }
        }
```

計算分數:

 * 由圖片上的onclick觸發,來計算分數

```{r}
function countscore() {
            count = count + 1;
            document.getElementById("scoretext").innerHTML = "總分:" + count;
        }
```