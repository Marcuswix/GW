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
const openChat = document.getElementById("chat")
const xmark = document.getElementById("xmark")

function openCloseChat()
{
    if (chat.classList.contains("hide"))
    {
    chat.classList.remove("hide")
    openChat.classList.add("hide")
    xmark.classList.remove("hide")
    }
    else
    {
        chat.classList.add("hide")
        openChat.classList.remove("hide")
        xmark.classList.add("hide")
    }
}

//Open cart function
const openCart = document.getElementById("cart")
const cartButton = document.getElementById("btn-your-cart")

function showCart()
{
    if (cartButton.classList.contains("hide-btn-your-cart"))
    {
        openCart.classList.remove("hide-your-cart")
        cartButton.classList.remove("hide-btn-your-cart")
    }

    else
    {
        openCart.classList.add("hide-your-cart")
        cartButton.classList.add("hide-btn-your-cart")
    }
}


