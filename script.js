light_dark_radio_button_container.onclick = () => {
    dark_radio_button.state = !dark_radio_button.state
    let size = getComputedStyle(document.body).getPropertyValue('--light_radio_button_size').split("px")[0]
    console.log(size)

    console.log(size * .90)
    if (dark_radio_button.state) {
        dark_radio_button.style.opacity = "0.9"
        dark_radio_button.style.left = (size * .95) + "px"
        document.body.style.background = 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/782173/dark_grain.png")';
    } else {
        dark_radio_button.style.opacity = "0"
        dark_radio_button.style.left = "0px"
        document.body.style.background = 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/782173/light_grain.png")';
    }
}