const { createApp } = Vue

createApp(
    {
        data() {
            return {
                name: "Ciao questo è il primo approccio con Vue js",
                url: "./img/01.webp",
                descrizione: "Spider-Man Miles Morales"
            }
        }
    }
).mount('#app')