document.getElementById("startBtn").onclick = async () => {
  const res = await fetch("/api/hello");
  const data = await res.json();
  alert(data.msg);
};