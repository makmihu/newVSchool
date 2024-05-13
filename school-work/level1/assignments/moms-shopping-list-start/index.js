const form = document.getElementById("add-todo")

form.addEventListener ("submit", (event) => {
    event.preventDefault();
    const input = form.inputBox.value;
    //
    console.log(input);

    const li = document.createElement('li');
    // li.textContent = input
    document.getElementById('list').append(li);

    const div = document.createElement('div');
    li.append(div);
    div.textContent = input;
    
    const editBox = document.createElement("input");
    editBox.value = input;
    editBox.classList.add("editBox");
    li.append(editBox);

    const edit = document.createElement("button");
    edit.textContent = "edit";
    edit.classList.add("edit");
    li.appendChild(edit);
    edit.addEventListener("click", () => {
        li.classList.add("editing");
    });

    const save = document.createElement("button");
    save.textContent = "save";
    save.classList.add("save");
    li.appendChild(save);
    save.addEventListener("click", () => {
        li.classList.remove("editing");
        div.textContent = editBox.value;
    });
    
    const x = document.createElement("button");
    x.textContent = "X";
    x.classList.add("x");
    li.appendChild(x);
    x.addEventListener("click", () => {
        li.remove();
    });
});



