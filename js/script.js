// To the top function
function toTheTop()
{
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
}

// Hide "To the top" - button
window.addEventListener("scroll", function()
{
    let element = document.getElementById("to-the-top")

    if (window.scrollY > 100)
    {
        element.classList.remove("hide-btn")
    }

    else
    {
        element.classList.add("hide-btn")
    }
})

// Open chat function
const chat = document.getElementById("chat-container")
const open = document.getElementById("chat")
const xmark = document.getElementById("xmark")

function openCloseChat()
{
    if (chat.classList.contains("hide"))
    {
    chat.classList.remove("hide")
    open.classList.add("hide")
    xmark.classList.remove("hide")
    }
    else
    {
        chat.classList.add("hide")
        open.classList.remove("hide")
        xmark.classList.add("hide")
    }
}
