// Milestone 3 external JavaScript file: grades the quiz and resets it.
function gradeQuiz(){
  let score=0; let results="";
  const q1=document.getElementById("q1").value.trim().toLowerCase();
  if(q1==="search"){score++;results+="<p class='correct'>Q1 Correct</p>";}else{results+="<p class='wrong'>Q1 Wrong - Answer: Search</p>";}
  const q2=document.querySelector('input[name="q2"]:checked');
  if(q2&&q2.value==="b"){score++;results+="<p class='correct'>Q2 Correct</p>";}else{results+="<p class='wrong'>Q2 Wrong</p>";}
  const q3=document.querySelector('input[name="q3"]:checked');
  if(q3&&q3.value==="b"){score++;results+="<p class='correct'>Q3 Correct</p>";}else{results+="<p class='wrong'>Q3 Wrong</p>";}
  const q4=document.querySelector('input[name="q4"]:checked');
  if(q4&&q4.value==="a"){score++;results+="<p class='correct'>Q4 Correct</p>";}else{results+="<p class='wrong'>Q4 Wrong</p>";}
  const selected=Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(x=>x.value);
  if(selected.includes("a")&&selected.includes("b")&&selected.length===2){score++;results+="<p class='correct'>Q5 Correct</p>";}else{results+="<p class='wrong'>Q5 Wrong - Answers: Keywords and Backlinks</p>";}
  const pass=score>=3?"PASS":"FAIL";
  document.getElementById("results").innerHTML=`<h2>Result: ${pass}</h2><h3>Score: ${score}/5</h3>${results}`;
}
function resetQuiz(){document.getElementById("quizForm").reset();document.getElementById("results").innerHTML="";}
