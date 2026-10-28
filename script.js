
const titles = [
  "미션 임파서블: 파이널 레코닝",
  "스파이더맨: 브랜드 뉴 데이",
  "어벤져스: 엔드게임",
  "오디세이",
  "슈퍼 마리오 갤럭시"
];

const ratings = [7.1, 7.9, 8.3, 6.5, 8.1];
const years = [2025, 2026, 2019, 2026, 2026];

let sum = 0;
for (let i = 0; i < ratings.length; i++) {
  sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;
let count = 0;

for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] > max) {
    max = ratings[i];
    maxIndex = i;
  }

  if (ratings[i] >= 8) {
    count++;
  }

  let label;
  if (ratings[i] >= 8.5) {
    label = "명작";
  } else if (ratings[i] >= 7) {
    label = "추천";
  } else {
    label = "보통";
  }

  console.log(
    titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label
  );
}

console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");

const avgText = average.toFixed(1);
const best = titles[maxIndex];
const summary = `내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`;
console.log("요약:", summary);

