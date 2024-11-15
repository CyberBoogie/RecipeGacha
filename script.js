const gachaButton = document.getElementById("gachaButton");
const gachaMessage = document.getElementById("gachaMessage");
const gachaBall = document.getElementById("gachaBall");
const recipeImage = document.getElementById("recipeImage");
// 別の説明画像に変更する
document.getElementById("qrTextImage").src = "確認.png";

// レシピと対応する画像のリスト
const recipes = [
  { name: "目玉焼き", image: "目玉焼き.png" },
  { name: "味噌汁", image: "味噌汁.png" },
  { name: "パスタ", image: "ナポリタン.png" },
  { name: "サラダ", image: "サラダ.png" },
  { name: "カレー", image: "カレー.png" },
  { name: "おにぎり", image: "おにぎり.png" },
  { name: "鍋", image: "鍋.png" },
  { name: "サンドイッチ", image: "サンドウィッチ.png" },
  { name: "オムライス", image: "オムライス.png" },
];

function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

gachaButton.addEventListener("click", () => {
  // ランダムなレシピを取得
  const recipe = getRandomRecipe();
  
  // メッセージとレシピ表示の更新
  gachaMessage.textContent = `今日の献立は、${recipe.name}をおすすめします！`;
  recipeImage.src = recipe.image; // 画像のソースを設定
  
  // ガチャボールのアニメーションを表示
  gachaBall.classList.remove("hidden");
  gachaBall.classList.add("show");

  // 数秒後にボールを消す
  setTimeout(() => {
    gachaBall.classList.remove("show");
    gachaBall.classList.add("hidden");
  }, 2000000);
});