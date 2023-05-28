




// Функция, вызываемая при перетаскивании еды
    function drag(event) {
      event.dataTransfer.setData("text", event.target.id);
    }

    // Функция, вызываемая при перетаскивании над животным
    function allowDrop(event) {
      event.preventDefault();
    }

    // Функция, вызываемая при отпускании еды над животным
    function drop(event) {
      event.preventDefault();
      var foodId = event.dataTransfer.getData("text");
      var animalId = event.target.id;

      if (foodId === animalId) {
        event.target.appendChild(document.getElementById(foodId));
        document.getElementById("message").textContent = "Правильно!";
      } else {
        document.getElementById("message").textContent = "Неправильно!";
      }
    }