import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はReactの学習中です。これから頑張ってフロントエンドエンジニアになります。
        </div>
        <div className="nameAndDeleteButton">
          <h3>@Hasegawa</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
