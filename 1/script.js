let width = 30;
let height = 30;
const kana =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもや-ゆ-よらりるれろわ---をん";
let ans = "";
let rects = [];

function updateValue() {
  ans = document.getElementById("answer").value;
  ans = ans.split("").filter((d) => ~kana.indexOf(d));
  console.log(ans);

  svg.selectAll(".nazo-label").remove();

  svg
    .selectAll("texts")
    .data(ans)
    .enter()
    .append("text")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("text-anchor", "middle") //左右中央揃え
    .attr("dominant-baseline", "central") //上下中央揃え
    .attr("x", (d) => width * (10 - Math.floor(kana.indexOf(d) / 5) + 0.5))
    .attr("y", (d) => height * ((kana.indexOf(d) % 5) + 0.5))
    .text((_, i) => String.fromCharCode("①".charCodeAt(0) + i))
    .attr('class', "nazo-label");
}

let svg = d3
  .select("#hiragana-table")
  .append("svg")
  .attr("width", 500)
  .attr("height", 200);

svg
  .selectAll("rects")
  .data(kana)
  .enter()
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("x", (_, i) => width * (10 - Math.floor(i / 5) + 0.5))
  .attr("y", (_, i) => height * ((i % 5) + 0.5))
  .attr("display", (d) => (d == "-" ? "none" : "auto"))
  .attr("stroke-width", 1)
  .attr("stroke", "black")
  .attr("fill", "lightcyan")
  //.attr("opacity", ".5");

