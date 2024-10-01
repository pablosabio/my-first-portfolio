document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contact__iframe" frameborder= "0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d623.1166998406804!2d12.399335469683077!3d51.339326398235976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f840fba6cca3%3A0x63439a6a94bddfe0!2sDresdner%20Str.%2C%2004317%20Leipzig!5e0!3m2!1ses!2sde!4v1727511048477!5m2!1ses!2sde"></iframe>
    `;
    }, 500);

});