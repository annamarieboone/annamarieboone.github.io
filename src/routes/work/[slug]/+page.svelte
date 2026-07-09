<script>
    import showdown from 'showdown';
    import Footer from '../../footer.svelte';
    const converter = new showdown.Converter();
    let { data } = $props();
    const { project } = data;

    const formattedDate = project.Date
        ? new Date(project.Date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : project.Date;

    const oldProject = project.Date ? new Date(project.Date) < new Date('2024-08-01') : false;
</script>

<div class="filters">
    <div class="filter-wrapper">
        <a href="/#work-samples" class="back-button">Back to all work</a>
    </div>
</div>

<div class="work-detail">
    <!-- <a href="/" class="back-button">← Back</a> -->
    <div class="header">
        <div class="headline-wrapper">
            <h5>PUBLISHED {formattedDate}</h5>
            <h2>{project.Headline}</h2>
            {#if project.URL}
                <div class="project-link">
                    <a href={project.URL} target="_blank" rel="noopener noreferrer">
                        🔗  Go to live project
                    </a>
                </div>
            {/if}
        </div>
    </div>

    {#if project.Video}
        <video loop playsinline autoplay muted class="motion-video">
            <source src="/images/mp4/{project.Video}.mp4" type="video/mp4" />
        </video>
        {#if project.Image}
            <img class="motion-fallback" src="/images/webps/{project.Image}.webp" alt={project.Headline} />
        {/if}
    {:else if project.Image}
        <img src="/images/webps/{project.Image}.webp" alt={project.Headline} />
    {/if}
    <div class="content">
        <div class="body">
            {#if oldProject}
                <p class="old-project">This is a project I am proud of but was built before our site underwent a substantial redesign — as such, there may be some excessive use of Times New Roman, broken images and general depreciation.</p>
            {/if}
            <div class="skills-wrapper">
                {#each project.Skills as skill}
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
            {#if project.Case_study}
                <div class="case-study">
                    {@html converter.makeHtml(project.Case_study)}
                </div>
            {/if}
        </div>
    </div>
</div>

<Footer />

<style>

    div.filters {
        margin-top: 0rem;
        background: var(--background);
        position: sticky;
        top: 0;
        z-index: 1000;
        border-bottom: 1px solid var(--light-gray);
        width: 100%;
        margin-bottom: 0rem;
        /* padding-top: 1rem; */
        /* padding-bottom: 1rem; */
        
    }

    .filter-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        padding: 16px 0;
        width: 85%;
        max-width: 1000px;
        margin: 0 auto;
        
    }

    .filters .back-button {
        padding: 5px 10px;
        border: 1px solid var(--light-gray);
        background: var(--light-gray);
        color: white;
        cursor: pointer;
        border-radius: 30px;
        font-size: 0.8rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        transition: 1s all; 
        text-decoration: none;
    }

    :global(.work-detail img) {
        width: 100%;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    div.work-detail {
        width: 85%;
        max-width: 1000px;
        margin: 0 auto;
        padding-top: 2rem;
        padding-bottom: 4rem;
    }

    video, img {
        width: 100%;
        border-radius: 30px;
        display: block;
        margin-bottom: 4rem;
        border: 1px solid var(--light-gray);
    }

    div.header {
        width: 100%;
        padding-top: 5vh;
        padding-bottom: 0;
    }

    h2 {
        font-family: 'Roboto Mono', monospace;
        letter-spacing: -2px;
        font-size: 2.75rem;
        font-weight: 500;
        text-wrap: balance;
        margin-top: 0;
        margin-bottom: 2.75rem;
        word-spacing: -5px;
        text-transform: lowercase;
        color: var(--light-gray);
    }

    h5 {
        font-weight: 500;
        letter-spacing: 1.5px;
        word-spacing: 3px;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        font-family: 'Roboto';
        text-transform: uppercase;
    }

    div.project-link {
        margin-bottom: 3rem;
    }

    div.project-link a {
        /* background: var(--light-gray); */
        color: var(--light-gray);
        /* padding: 0.3rem 0.75rem 0.25rem 0.5rem; */
        /* border-radius: 30px; */
        font-size: 0.85rem;
        letter-spacing: 0.5px;
        line-height: 1.5;
        letter-spacing: 1px;
        border-bottom: 3px solid var(--light-gray);
        text-decoration: none;
        transition: 1s all;
        text-transform: uppercase;
        font-weight: 900;
    }

    div.project-link a:hover {
        background: var(--background);
        color: var(--light-gray);
        transition: 1s all;
    }

    div.case-study  {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        line-height: 1.5;
        font-size: 1.3em;
        margin-top: 0;
        max-width: 600px;
    }

    :global(div.case-study a) {
        font-family: "Roboto Mono";
        font-weight: 900;
        color: var(--light-gray);
        text-decoration: none;
        /* font-size: 0.9em; */
    }

     :global(div.case-study a:hover) {
        cursor: pointer;
        text-decoration: underline;
    }

    p.old-project {
        font-size: 1rem;
        border-bottom: 1px solid var(--light-gray);
        padding-bottom: 0.75rem;
        margin-bottom: 1rem;
        font-style: italic;
    }

    div.skills-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        border-bottom: 1px solid var(--light-gray);
        padding-bottom: 1rem;
        max-width: 600px;
        margin-top: 1rem;
    }

    p.skill {
        font-size: 0.8rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        margin: 0;
        word-spacing: 0.5em;
    }

    p.skill span {
        color: var(--light-gray);
    }

    @media only screen and (max-width: 900px) {
        div.work-detail {
            width: 85%;
        }

        div.header, div.body {
            width: 100%;
        }
        
        div.filters {
            margin-bottom: 0rem;
        }

        video, img {
            width: 112%;
            margin-left: -6%;
            
        }

        div.case-study {
            font-size: 1.1em;
            line-height: 1.4;
        }
    }

    @media only screen and (max-width: 600px) {
        video, img {
            border-radius: 15px;
        }
        div.header {
            padding-top: 5vh;
        }
    }

    .motion-fallback {
        display: none;
    }

    @media (prefers-reduced-motion: reduce) {
        .motion-video {
            display: none;
        }
        .motion-fallback {
            display: block;
        }
    }
</style>
