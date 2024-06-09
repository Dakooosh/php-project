function register() {
  // Get input values
  var enterName = document.getElementById('enterName').value;
  var enterTown = document.getElementById('enterTown').value;
  var enterId = document.getElementById('enterId').value;

  // Display client data
  document.getElementById('client-name-input').value = enterName + ", " + enterTown + ", " + enterId;

  // Toggle visibility of sections
  document.getElementById('input-data').style.display = 'none';
  document.getElementById('client-data').style.display = 'initial';
}

function edit() {
  document.getElementById('client-data').style.display = "none";
  document.getElementById('input-data').style.display = "initial";
}




function startData (){
  document.getElementById('start').style.display = "none"
  document.getElementById('game').style.display = "initial"
} //для чего?




function booking() {
  document.getElementById('sport').style.display = 'none';
  document.getElementById('get').style.display = 'block';

  document.getElementById('activityOne').value = document.getElementById('activityOneInput').value;
  document.getElementById('activityTwo').value = document.getElementById('activityTwoInput').value;
  document.getElementById('activityThree').value = document.getElementById('activityThreeInput').value;
  document.getElementById('activityFour').value = document.getElementById('activityFourInput').value;
}

function updateInput(targetId, value) {
  document.getElementById(targetId).value = value;
}

function get() {
  const activityOnePrice = parseFloat(document.getElementById('activityOnePrice').value);
  const activityTwoPrice = parseFloat(document.getElementById('activityTwoPrice').value);
  const activityThreePrice = parseFloat(document.getElementById('activityThreePrice').value);
  const activityFourPrice = parseFloat(document.getElementById('activityFourPrice').value);

  const activityOneQuantity = parseInt(document.getElementById('activityOneQuantity').value);
  const activityTwoQuantity = parseInt(document.getElementById('activityTwoQuantity').value);
  const activityThreeQuantity = parseInt(document.getElementById('activityThreeQuantity').value);
  const activityFourQuantity = parseInt(document.getElementById('activityFourQuantity').value);

  const totalPayment = (activityOnePrice * activityOneQuantity) +
                      (activityTwoPrice * activityTwoQuantity) +
                      (activityThreePrice * activityThreeQuantity) +
                      (activityFourPrice * activityFourQuantity);

  alert(`Total Payment: $${totalPayment.toFixed(2)}`);
}

function playSound(activity){
  let music = "Audio\\"+activity+".mp3";
  document.getElementById("music").src=music;
  document.getElementById("musicControl").load();
}