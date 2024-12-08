//音楽関連
const audio1 = new Audio("maou_bgm_ethnic32.mp3");
const audio2 = new Audio("ドラムロール (online-audio-converter.com).wav");
const audio3 = new Audio("和太鼓でカカッ.mp3");
const audio01=new Audio("ドンドンパフパフ.mp3");
const audio02=new Audio("歓声と拍手1.mp3");
const audio03=new Audio("男衆「イヤッホー！」.mp3");
const audio04=new Audio("男衆「オウ！」.mp3");
const audio05=new Audio("男衆「喝！」.mp3");
const audio06=new Audio("時代劇演出1.mp3");
const audio07=new Audio("呪いの旋律.mp3");
document.querySelector(".bgm-btn").addEventListener("click", () => {
    audio1.play();
})


//おみくじ結果を、隠す処理を行う。※ゴリ押し。
document.querySelector("#a1").classList.add("close");
document.querySelector("#a2").classList.add("close");
document.querySelector("#a3").classList.add("close");
document.querySelector("#a4").classList.add("close");
document.querySelector("#a5").classList.add("close");
document.querySelector("#a6").classList.add("close");
document.querySelector("#a7").classList.add("close");

document.querySelector(".omikuji-btn").addEventListener("click", () => {
    document.querySelector(".kesu").classList.add("close");
    audio2.play();

    document.querySelector(".white").style.opacity = "1";
    setTimeout(() => {
        $(".white").fadeOut(1500);
    }, 1500)

    const num = Math.floor((Math.random() * 7) + 1);//ランダムに数を取得
    console.log(num)
    console.log(`#a${num}`);
    setTimeout(() => {
        document.querySelector(`#a${num}`).classList.add("open");
    }, 3000)

    setTimeout(()=>{switch (num) {
        case 1:
            audio01.play();
            break;
        case 2:
            audio02.play();
            break;
        case 3:
            audio03.play();
            break;
        case 4:
            audio04.play();
            break;
        case 5:
            audio05.play();
            break;
        case 6:
            audio06.play();
            break;
        case 7:
            audio07.play();
            break;
    }},3500)

});
