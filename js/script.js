
// 木山神宮公式ホームページ

// ページ内リンクを滑らかにスクロール
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ページ読込時にフェードイン
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
