function getRankByWins(rankedAvg) {
  const ranks = [
    { max: 1000, name: "Silver I" },
    { max: 2000, name: "Silver II" },
    { max: 3000, name: "Silver III" },
    { max: 4000, name: "Silver IV" },
    { max: 5000, name: "Silver Elite" },
    { max: 6000, name: "Silver Elite Master" },
    { max: 7000, name: "Gold Nova I" },
    { max: 8000, name: "Gold Nova II" },
    { max: 9000, name: "Gold Nova III" },
    { max: 10000, name: "Gold Nova Master" },
    { max: 20000, name: "Master Guardian I" },
    { max: 30000, name: "Master Guardian II" },
    { max: 40000, name: "Master Guardian Elite" },
    { max: 50000, name: "Distinguished Master Guardian" },
    { max: 60000, name: "Legendary Eagle" },
    { max: 70000, name: "Legendary Eagle Master" },
    { max: 80000, name: "Supreme Master First Class" },
    { max: Infinity, name: "The Global Elite" },
  ];

  for (const rank of ranks) {
    if (rankedAvg <= rank.max) return rank.name;
  }
}

function calculateRank() {
  const winsNumber = parseInt(document.getElementById("winsInput").value);
  const winsNumberFormatted = parseInt(
    document.getElementById("winsInput").value
  ).toLocaleString();

  const lossesNumber = parseInt(document.getElementById("lossesInput").value);
  const lossesNumberFormatted = parseInt(
    document.getElementById("lossesInput").value
  ).toLocaleString();

  const rankedAvg = winsNumber - lossesNumber;
  const rankedAvgFormatted = (winsNumber - lossesNumber).toLocaleString();

  const content = document.getElementById("rankDescription");

  content.innerHTML = `You have a total of 
                      <span class="text-green-400">${winsNumberFormatted}</span> 
                      wins, against a total of 
                      <span class="text-red-400">${lossesNumberFormatted}</span>
                      losses.<br>This grants you a total of 
                      <span class="text-blue-400">${rankedAvgFormatted}</span> 
                      ranked score and places you at rank 
                      <span class="border border-zinc-800 rounded-2xl bg-slate-800 text-yellow-200 pb-1 px-3 me-1">
                      ${getRankByWins(rankedAvg)}</span>!`;
}
