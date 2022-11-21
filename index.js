const paragraphs = document.querySelectorAll(".paragraph");
const sections = document.querySelectorAll(".section");

paragraphs.forEach(paragraph => {
    paragraph.addEventListener("dragstart", event => {
        console.log("I'm dragging the paragraph: " + paragraph.innerText);
        paragraph.classList.add("dragging");
        event.dataTransfer.setData("id", paragraph.id);
        const element = document.querySelector(".ghost-image")
        event.dataTransfer.setDragImage(element, 0 , 0);
    })

    paragraph.addEventListener("dragend", () => {
        paragraph.classList.remove("dragging");
    })
});

sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    })

    section.addEventListener("drop", event => {
        console.log("Drop");
        const id_paragraph = event.dataTransfer.getData("id");
        const paragraph = document.getElementById(id_paragraph);
        section.appendChild(paragraph);
    })
});

const trash = document.querySelector(".trash");

trash.addEventListener("dragover", event => {
    event.preventDefault();
});

trash.addEventListener("drop", event => {
    const id_paragraph = event.dataTransfer.getData("id");
    document.getElementById(id_paragraph).remove();
});


