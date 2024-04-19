<!DOCTYPE html>
<html>
<head>
  <title>Language Preferences</title>
  <style>
    body {
      background-color: rgb(22, 22, 22);
      color: rgb(184, 184, 184);
      font-size: 20px;
      font-family: Arial, Helvetica, sans-serif;
      margin-left: 500px;
    }
    
    .container {
      display: flex;
    }
    .list {
      margin: 10px;
      border: 1px solid #ccc;
      padding: 10px;
      width: 200px;
    }
  </style>
  <script>
    function addLanguage() {
      var newLanguage = document.getElementById("newLanguage").value;
      var proposedList = document.getElementById("proposedLanguages");
      var preferredList = document.getElementById("preferredLanguages");
  
     
      for (var i = 0; i < proposedList.children.length; i++) {
        if (proposedList.children[i].textContent === newLanguage) {
          proposedList.removeChild(proposedList.children[i]);
  
          var newListItem = document.createElement("li");
          newListItem.textContent = newLanguage;
          preferredList.appendChild(newListItem);
          break;
        }
      }
    }
  
    function removeLanguage() {
      var newLanguage = document.getElementById("newLanguage").value;
      var proposedList = document.getElementById("proposedLanguages");
      var preferredList = document.getElementById("preferredLanguages");
  
      for (var i = 0; i < preferredList.children.length; i++) {
        if (preferredList.children[i].textContent === newLanguage) {
          preferredList.removeChild(preferredList.children[i]);
  
          var newListItem = document.createElement("li");
          newListItem.textContent = newLanguage;
          proposedList.appendChild(newListItem);
          break;
        }
      }
    }
  </script>
</head>
<body>

<div class="container">
  <div class="list">
    <h3>Les languages proposés</h3>
    <ul id="proposedLanguages">
      <li>C</li>
      <li>C#</li>
      <li>Python</li>
      <li>JS</li>
    </ul>
  </div>

  <div class="list">
    <h3>Vos preferences</h3>
    <ul id="preferredLanguages">
      <li>Java</li>
    </ul>
  </div>
</div>

<input type="text" id="newLanguage" placeholder="Java">
<button onclick="addLanguage()">Ajouter </button>
<button onclick="removeLanguage()">Retirer</button>

</body>
</html>
