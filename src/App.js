import React from 'react';
import './App.css';

document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-button");

  addButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
              <input type="checkbox">
              <span>${taskText}</span>
              <button class="delete-button">Dzēst</button>
          `;

          taskList.appendChild(listItem);
          taskInput.value = "";

          const deleteButton = listItem.querySelector(".delete-button");
          deleteButton.addEventListener("click", function () {
              listItem.remove();
          });

          const checkbox = listItem.querySelector("input[type='checkbox']");
          checkbox.addEventListener("change", function () {
              const taskSpan = listItem.querySelector("span");
              if (checkbox.checked) {
                  taskSpan.style.textDecoration = "line-through";
              } else {
                  taskSpan.style.textDecoration = "none";
              }
          });
      }
  });
});





export default function App() {
  return (
    <>
    </>
  );
}


