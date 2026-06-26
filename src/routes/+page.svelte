<script>
    import projects from '../data/work.json';
    import WorkSample from './worksample.svelte';
    import Hero from './hero.svelte';

    const allSkills = [...new Set(projects.flatMap(p => p.Skills))].sort();

    let activeFilter = $state(null);
    let activeProject = $state(null);

    const filteredProjects = $derived(
        projects.filter(p => p.Publish && (activeFilter === null || p.Skills.includes(activeFilter)))
    );
</script>

<Hero />

<div class="filters">
    <button class:active={activeFilter === null} onclick={() => activeFilter = null}>All</button>
    {#each allSkills as skill}
        <button class:active={activeFilter === skill} onclick={() => activeFilter = skill}>
            {#if skill === "Reporting"}
                🗒️ {skill}
            {:else if skill === "Design"}
                ✨ {skill}
            {:else if skill === "Editing"}
                ✂️ {skill}
            {:else if skill === "Development"}
                ⌨️ {skill}
            {:else if skill === "Writing"}
                ✏️ {skill}
            {:else if skill === "Illustration"}
                🎨 {skill}
            {:else if skill === "Graphics"}
                📊 {skill}
            {/if}
        </button>
    {/each}
</div>

<div class="work-samples">
    {#each filteredProjects as project (project.Headline)}
        <WorkSample 
            headline={project.Headline}
            url={project.URL}
            image={project.Image}
            caseStudy={project.Case_study}
            date={project.Date}
            video={project.Video}
            skills={project.Skills}
            selected={activeProject === project.Headline}
            onselect={() => activeProject = activeProject === project.Headline ? null : project.Headline}
        />
    {/each}
</div>

<footer>
    <p>Built with Svelte, <a href="https://github.com/annamarieboone" target="_blank" rel="noopener noreferrer">Github</a>, <a href="https://docs.google.com/spreadsheets/d/1LBjODaOicU0heSDEVyoKasBxMQq9Fei8WxFu5y-74pM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Google Sheets</a> + a dream. </p>
    <p>Last updated <span class="last-updated">June 2026.</span></p>
</footer>

<style>
    div.work-samples, footer {
        /* display: flex; */
        width: 80%;
        max-width: 1000px;
        margin: 0 auto;
        /* gap: 2rem; */
        /* flex-wrap: wrap; */
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

    .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        padding: 16px 0;
        width: 80%;
        max-width: 1000px;
        margin: 0 auto;
        background: var(--background);
        position: sticky;
        top: 0;
        z-index: 1000;
        border-bottom: 1px solid var(--light-gray);
    }

    .filters button {
        padding: 5px 10px;
        border: 0.5px solid var(--light-gray);
        background: white;
        color: var(--light-gray);
        cursor: pointer;
        border-radius: 30px;
        font-size: 0.8rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        transition: 1s all; 
    }

    .filters button.active {
        background: var(--light-gray);
        color: var(--background);
    }

    .filters button:hover {
        background: var(--light-gray);
        color: var(--background);
        cursor: pointer;
        transition: 1s all;
    }

    @media only screen and (max-width: 900px) {
        div.work-samples, footer {
            width: 85%;
            /* max-width: 600px; */
        }
        div.filters {
            width: 85%;
        }
    }

    @media only screen and (max-width: 600px){
        div.filters {
            flex-wrap: nowrap;
            overflow-x: auto;
            width: 100%;
            /* margin-left: -7.5%; */
            padding-left: 8px;
            box-sizing: border-box;
            scrollbar-width: none;
        }

        .filters::-webkit-scrollbar {
            display: none;
        }

        .filters button {
            flex-shrink: 0;
            font-size: 0.7rem;
        }
    }
</style>

    