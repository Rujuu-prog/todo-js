import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button(戻す)タグ作成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    moveElement([backButton], [completeButton, deleteButton]);
    document.getElementById("incomplete-list").appendChild(li);
  });

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    moveElement([completeButton, deleteButton], [backButton]);
    document.getElementById("complete-list").appendChild(li);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTaret = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  //moveElement(削除する要素の配列, divの子要素に入れる要素の配列)
  const moveElement = (deleteItems, createItems) => {
    deleteItems.forEach((deleteItem) => deleteItem.remove());
    createItems.forEach((createItem) => div.appendChild(createItem));
  };

  //divタグの子要素にpタグを設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //liタグの子要素に各要素を設定
  li.appendChild(div);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
