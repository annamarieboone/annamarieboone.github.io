<footer>
    <p>Built with Svelte, Github, <a href="https://docs.google.com/spreadsheets/d/1LBjODaOicU0heSDEVyoKasBxMQq9Fei8WxFu5y-74pM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Google Sheets</a> + a dream. </p>
    <p>Last updated <span class="last-updated">July 2026.</span></p>
</footer>

<style>
    footer {
        /* display: flex; */
        width: 85%;
        max-width: 1000px;
        margin: 0 auto;
        /* gap: 2rem; */
        /* flex-wrap: wrap; */
        border-top: 1px solid var(--light-gray);
        position: relative;
        margin-top: 2rem;
    }

    footer {
        display: flex;
        justify-content: space-between;
    }

    footer p {
        font-family: "Roboto Mono", sans-serif;
        color: var(--light-gray);
        font-size: 0.8rem;
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    footer p a {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid var(--light-gray);
    }
</style>