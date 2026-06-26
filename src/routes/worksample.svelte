<script>
    import { fade, slide } from 'svelte/transition';

    let {
        headline,
        url,
        image,
        caseStudy,
        date,
        skills,
        selected,
        onselect,
        video
    } = $props();

    let hovering = $state(false);
    let videoEl = $state(null);

    const formattedDate = $derived(
        date ? new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : date
    );

    const oldProject = $derived(date ? new Date(date) < new Date('2024-08-01') : false);

    $effect(() => {
        if (!videoEl) return;
        if (hovering || selected) {
            videoEl.play();
        } else {
            videoEl.pause();
            videoEl.currentTime = 0;
        }
    });
</script>

<div
    class="work-sample"
    class:expanded={selected}
    role="button"
    tabindex="0"
    transition:slide
    onclick={onselect}
    onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? onselect() : null}
    onmouseenter={() => hovering = true}
    onmouseleave={() => hovering = false}
>   

    {#if video}
        <video bind:this={videoEl} loop playsinline muted onclick={(e) => { e.stopPropagation(); videoEl.paused ? videoEl.play() : videoEl.pause(); }}>
            <source src="https://raw.githubusercontent.com/annamarieboone/annamarieboone.github.io/master/images/mp4/{video}.mp4" type="video/mp4" />
        </video>
    {:else if image}
        <img src="https://raw.githubusercontent.com/annamarieboone/annamarieboone.github.io/master/images/webps/{image}.webp" alt={headline} />
    {/if}
    <div class="text-wrapper headline">
        <div class="headline-wrapper">
            <h2>{headline}</h2>
            <h5>PUBLISHED {formattedDate}</h5>
        </div>
        {#if selected}
            <div class="project-link">
                <a href="{url}" target="_blank" rel="noopener noreferrer" onclick={(e) => e.stopPropagation()}>
                    🔗  Visit project page 
                </a>
            </div>
        {/if}
        <!-- {#if selected}
            <div class="skills-wrapper" transition:fade>
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
                    {/if}
                {/each}
            </div>
        {/if} -->
    </div>
   <div class="skills-wrapper">
        {#if oldProject && selected}
            <p class="old-project">This is a project I am proud of but was built before our site underwent a substantial redesign — as such, there may be some excessive use of Times New Roman, broken images and general depreciation.</p>
        {/if}
        {#if selected}
            <div class="case-study-wrapper" in:fade>
                {#if caseStudy}
                    <p>{@html caseStudy}</p>
                {/if}
            </div>
        {/if}
        <!-- <h5>Skills</h5> -->
         <!-- {#if !selected} -->
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
                {/if}
            {/each}
        </div>
        <!-- {/if} -->
    </div>

   
</div>

<style>
    div.work-sample {
        margin: 0 auto;
        position: relative;
        width: 100%;
        border-bottom: 1px solid var(--light-gray);
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        cursor: pointer;
        transition: 2s all;
        display: flex;
        justify-content: space-between;
    }

    div.skills-wrapper {
        /* displa y: flex;
        flex-wrap: wrap; */
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

    div.work-sample a {
        color: inherit;
        text-decoration: none;
    }
    
    div.work-sample img,
    div.work-sample:not(.expanded) video {
        filter: none;
        mix-blend-mode: normal;
        height: auto;
        /* max-width: 200px; */
        width: 20%;
        border-radius: 15px;
        align-self: start;
        transition: 1s all;
    }

    p.old-project {
        font-size: 0.9rem;
        border-bottom: 0.5px solid var(--light-gray);
        padding-bottom: 0.5rem;
    }

    div.project-link {
        color: var(--light-gray);
        font-weight: 900;
    }

    div.project-link a {
        background: var(--light-gray);
        color: var(--background);
        padding: 0.3rem 0.75rem 0.25rem 0.5rem;
        border-radius: 30px;
        border-bottom: 3px solid var(--light-gray);
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        line-height: 1.5;
        border:1px solid var(--light-gray);
        transition: 1s all;
    }

    div.project-link a:hover {
        background: var(--background);
        color: var(--light-gray);
        transition: 1s all;
        cursor: pointer;
    }

    div.work-sample.expanded {
        flex-wrap: wrap;
        /* padding-top: 5rem; */
        /* padding-bottom: 5rem; */
    }

    div.work-sample.expanded img, div.work-sample.expanded video {
        width: 100%;
        transition: 1s all;
        margin-bottom: 2rem;
        border-radius: 40px;
        /* border: 1px solid var(--light-gray); */
    }

    div.work-sample.expanded div.skills-wrapper {
        width: 50%;
        margin: 0;
        padding: 0;
        border: none;
        display: flex;
        flex-wrap: wrap;
    }

    div.work-sample.expanded div.each-skill {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
    }

    div.work-sample.expanded div.text-wrapper {
        width: 40%;
    }

    div.work-sample.expanded div.skills-wrapper p.skill {
        margin-right: 1em;
        margin-bottom: 0.25em;
        /* font-weight: 600; */
    }

    div.work-sample.expanded div.case-study {
        width: 100%;
        text-wrap: pretty;
    }

    div.case-study-wrapper p {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        line-height: 1.5;
        font-size: 1.1em;
        margin-top: 0;
        margin-bottom: 0;
    }


    @media only screen and (max-width: 900px) {
        div.work-sample {
            flex-wrap: wrap;
        }

        div.work-sample img,
        div.work-sample:not(.expanded) video {
            width: 100%;
            margin-bottom: 1rem;
        }

        div.work-sample h2 {
            text-wrap: pretty;
        }

        div.work-sample div.text-wrapper {
            width: 60%;
        }

        div.work-sample div.skills-wrapper {
            width: 30%;
        }

        div.work-sample.expanded div.text-wrapper {
            width: 100%;
        }

        div.work-sample.expanded div.skills-wrapper {
            width: 100%;
        }

        div.work-sample div.skills-wrapper {
            border:none;
            padding-left: 0;
        }
        div.work-sample.expanded img {
            border-radius: 15px;
            margin-bottom: 1rem;
        }

        div.work-sample div.project-link {
            margin-bottom: 2rem;
        }
    }

    @media only screen and (max-width: 600px) {
        div.work-sample {
            display: block;
        }

        div.work-sample img, div.work-sample div.text-wrapper, div.work-sample div.skills-wrapper {
            width: 100%;
        }

        div.work-sample div.each-skill {
            margin-top: 0rem;
            display: flex;
            flex-wrap: wrap;
        }

        div.work-sample div.skills-wrapper p.skill {
            margin-right: 1em;
            margin-bottom: 0.25em;
            font-weight: 600;
        }
    }
</style>