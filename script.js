const quotes = [
    "「成功は最善の復讐である」 - フランク・シナトラ",
    "「明日を変えるには、今日を変えなさい」 - パウロ・コエーリョ",
    "「失敗は成功への第一歩である」 - トーマス・エジソン",
    // 以下、さらに言葉や格言を追加していく
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote").innerText = randomQuote;
}

document.getElementById("generate").addEventListener("click", displayRandomQuote);

// 最初の格言を表示
displayRandomQuote();
