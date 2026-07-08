<script>
    import { slugify } from '$lib/slugify.js';

    let {
        headline,
        image,
        date,
        skills,
        video
    } = $props();

    const formattedDate = $derived(
        date ? new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : date
    );

    const slug = $derived(slugify(headline));
</script>

<a href="/work/{slug}" class="work-sample">
    {#if skills.includes("Best")}
        <div class="best badge">
            <p class="best skill">🏆</p>
        </div>
    {/if}
    {#if video}
        <video loop playsinline autoplay muted>
            <source src="https://raw.githubusercontent.com/annamarieboone/annamarieboone.github.io/master/images/mp4/{video}.mp4" type="video/mp4" />
        </video>
    {:else if image}
        <img src="https://raw.githubusercontent.com/annamarieboone/annamarieboone.github.io/master/images/webps/{image}.webp" alt={headline} />
    {/if}
    <div class="text-wrapper">
        <div class="headline-wrapper">
            <h2>{headline}</h2>
            <h5>PUBLISHED {formattedDate}</h5>
        </div>
    </div>
    <div class="skills-wrapper">
        <div class="each-skill">
            {#each skills as skill}
                {#if skill === "Reporting"}
                    <p class="reporting skill"><span>🗒️ {skill}</span></p>
                {:else if skill === "Design"}
                    <p class="design skill"><span>✨ {skill}</span></p>
                {:else if skill === "Development"}
                    <p class="development skill"><span>⌨️ {skill}</span></p>
                {:else if skill === "Writing"}
                    <p class="writing skill"><span>✏️ {skill}</span></p>
                {:else if skill === "Illustration"}
                    <p class="illustration skill"><span>🎨 {skill}</span></p>
                {:else if skill === "Graphics"}
                    <p class="graphics skill"><span>📊 {skill}</span></p>
                {:else if skill === "Editing"}
                    <p class="editing skill"><span>✂️ {skill}</span></p>
                {/if}
            {/each}
        </div>
    </div>
</a>

<style>
    a.work-sample {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        position: relative;
        width: 100%;
        border-bottom: 1px solid var(--light-gray);
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    div.best {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid var(--light-gray);
        background: white;
        position: absolute;
        left: -20px;
        top: -20px;
    }

    div.best p {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        text-align: center;
        transform: translate(-50%, -50%);
        line-height: 1.2;
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }

    a.work-sample:hover h2 {
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    div.skills-wrapper {
        width: 15%;
        border-left: 0.5px solid var(--light-gray);
        padding-left: 2rem;
    }

    h5 {
        font-weight: 400;
        letter-spacing: 1.5px;
        word-spacing: 3px;
        margin-top: 1rem;
        font-family: 'Roboto';
        text-transform: uppercase;
    }

    h2 {
        font-family: 'Roboto Mono', monospace;
        letter-spacing: -1px;
        font-size: 1.85rem;
        font-weight: 500;
        text-wrap: balance;
        margin-top: 0;
        margin-bottom: 0.5rem;
        word-spacing: -5px;
        text-transform: lowercase;
    }

    p.skill {
        font-size: 0.8rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        margin-bottom: 1em;
        word-spacing: 0.5em;
    }

    p.skill span {
       /* padding: 5px 10px; */
        /* border: 1px solid var(--light-gray); */
        background: transparent;
        color: var(--light-gray);
        border-radius: 30px;
    }

    div.text-wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* max-width: 500px; */
    }

    a.work-sample img,
    a.work-sample video {
        height: auto;
        width: 20%;
        border-radius: 15px;
        align-self: start;
    }

    @media only screen and (max-width: 900px) {
        a.work-sample {
            flex-wrap: wrap;
        }

        a.work-sample img,
        a.work-sample video {
            width: 100%;
            margin-bottom: 1rem;
        }

        a.work-sample h2 {
            text-wrap: pretty;
        }

        div.text-wrapper {
            width: 60%;
        }

        div.skills-wrapper {
            width: 30%;
            border: none;
            padding-left: 0;
        }
    }

    @media only screen and (max-width: 600px) {
        a.work-sample {
            display: block;
        }

        a.work-sample img,
        div.text-wrapper,
        div.skills-wrapper {
            width: 100%;
        }

        div.skills-wrapper p.skill {
            margin-right: 1em;
            margin-bottom: 0.25em;
        }
    }
</style>