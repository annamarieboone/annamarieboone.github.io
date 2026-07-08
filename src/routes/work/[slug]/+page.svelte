<script>
    let { data } = $props();
    const { project } = data;

    const formattedDate = project.Date
        ? new Date(project.Date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : project.Date;

    const oldProject = project.Date ? new Date(project.Date) < new Date('2024-08-01') : false;
</script>

<div class="work-detail">
    <a href="/" class="back-button">← Back</a>

    {#if project.Video}
        <video loop playsinline autoplay muted>
            <source src="https://raw.githubusercontent.com/annamarieboone/annamarieboone.github.io/master/images/mp4/{project.Video}.mp4" type="video/mp4" />
        </video>
    {:else if project.Image}
        <img src="https://raw.githubusercontent.com/annamarieboone/annamarieboone.github.io/master/images/webps/{project.Image}.webp" alt={project.Headline} />
    {/if}

    <div class="content">
        <div class="header">
            <div class="headline-wrapper">
                <h2>{project.Headline}</h2>
                <h5>PUBLISHED {formattedDate}</h5>
            </div>
            {#if project.URL}
                <div class="project-link">
                    <a href={project.URL} target="_blank" rel="noopener noreferrer">
                        🔗  Visit project page
                    </a>
                </div>
            {/if}
        </div>

        <div class="body">
            {#if oldProject}
                <p class="old-project">This is a project I am proud of but was built before our site underwent a substantial redesign — as such, there may be some excessive use of Times New Roman, broken images and general depreciation.</p>
            {/if}
            {#if project.Case_study}
                <div class="case-study">
                    <p>{@html project.Case_study}</p>
                </div>
            {/if}
        </div>

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
    </div>
</div>

<style>
    div.work-detail {
        width: 80%;
        max-width: 1000px;
        margin: 0 auto;
        padding-top: 2rem;
        padding-bottom: 4rem;
    }

    a.back-button {
        display: inline-block;
        font-family: 'Roboto Mono', monospace;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        color: var(--light-gray);
        text-decoration: none;
        border: 0.5px solid var(--light-gray);
        padding: 5px 12px;
        border-radius: 30px;
        margin-bottom: 2rem;
        transition: 0.3s all;
    }

    a.back-button:hover {
        background: var(--light-gray);
        color: var(--background);
    }

    video, img {
        width: 100%;
        border-radius: 30px;
        display: block;
        margin-bottom: 2rem;
    }

    div.content {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }

    div.header {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

    h5 {
        font-weight: 400;
        letter-spacing: 1.5px;
        word-spacing: 3px;
        margin-top: 1rem;
        font-family: 'Roboto';
        text-transform: uppercase;
    }

    div.project-link {
        margin-top: 1.5rem;
    }

    div.project-link a {
        background: var(--light-gray);
        color: var(--background);
        padding: 0.3rem 0.75rem 0.25rem 0.5rem;
        border-radius: 30px;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        line-height: 1.5;
        border: 1px solid var(--light-gray);
        text-decoration: none;
        transition: 1s all;
    }

    div.project-link a:hover {
        background: var(--background);
        color: var(--light-gray);
        transition: 1s all;
    }

    div.body {
        width: calc(55% - 2rem);
    }

    div.case-study p {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        line-height: 1.5;
        font-size: 1.1em;
        margin-top: 0;
    }

    p.old-project {
        font-size: 0.9rem;
        border-bottom: 0.5px solid var(--light-gray);
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
    }

    div.skills-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        border-top: 0.5px solid var(--light-gray);
        padding-top: 1rem;
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
    }

    @media only screen and (max-width: 600px) {
        video, img {
            border-radius: 15px;
        }
    }
</style>
