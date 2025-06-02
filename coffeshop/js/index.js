// ① ページが読み込まれたらスタート
document.addEventListener("DOMContentLoaded", function () {

    // ② ナビゲーション内のリンクを全部取得する
    const links = document.querySelectorAll('nav a');

    // ③ 各リンクにクリックイベントをつける
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // ページ上部に戻る動作を止める

            // ④ クラス名を取得（例：menu / about / location）
            const className = link.className;

            // ⑤ クラス名に対応するスクロール先を決める
            let targetSelector = null;
            if (className === 'menu') {
                targetSelector = '.menu_img';
            } else if (className === 'about') {
                targetSelector = '.about_img';
            } else if (className === 'location') {
                targetSelector = '.location_img';
            } else {
                return; // 対応がなければ何もしない
            }

            // ⑥ 対象の要素を取得する
            const targetElement = document.querySelector(targetSelector);
            if (!targetElement) return;

            // ⑦ ページの一番上からどのくらいの位置かを計算
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

            // ⑧ スムーススクロールで移動！
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

});



// // ① ページが読み込まれたらスタート
// document.addEventListener("DOMContentLoaded",
//     function () {
//         // ② ナビゲーション内のリンクを全部取得する
//         const Links = document.querySelectorAll("nav a");

//         // ③ 各リンクにクリックイベントをつける
//         Links.forEach(link => {
//             link.addEventListener(
//                 "click",
//                 function (e) {
//                     e.preventDefault();

//                     // ④ クラス名を取得（例：menu / about / location）
//                     const ClassName = link.ClassName;

//                     // ⑤ クラス名に対応するスクロール先を決める
//                     let TargetSelector = null;
//                     if (ClassName === "menu") {
//                         TargetSelector = ".menu_img";
//                     } else if (ClassName === "about") {
//                         TargetSelector = "about_img";
//                     } else if (ClassName === "location") {
//                         TargetSelector = "location_img";
//                     } else {
//                         return;
//                     }
//                     // ⑥ 対象の要素を取得する
//                     const TargetElement = document.querySelector(TargetSelector);
//                     if (!TargetElement) return;

//                     // ⑦ ページの一番上からどのくらいの位置かを計算
//                     const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

//                     // ⑧ スムーススクロールで移動！
//                     window.scrollTo({
//                         top: targetPosition,
//                         behavior: 'smooth'
//                     });
//                 }
//             )
//         })
//     })














