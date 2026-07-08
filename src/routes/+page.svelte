<script>
    import projects from '../data/work.json';
    import WorkSample from './worksample.svelte';
    import Hero from './hero.svelte';
    import Footer from './footer.svelte';

    const allSkills = [...new Set(projects.flatMap(p => p.Skills))].sort();

    let activeFilter = $state(null);

    const filteredProjects = $derived(
        projects.filter(p => p.Publish && (activeFilter === null || p.Skills.includes(activeFilter)))
    );
</script>

<Hero />

<div class="filters" id="work-samples">
    <div class="filter-wrapper">
        <button class:active={activeFilter === null} onclick={() => activeFilter = null}>All work</button>
        {#each allSkills as skill}
            <button class:active={activeFilter === skill} onclick={() => activeFilter = skill}>
                {#if skill === "Best"}
                    ⭐ Selects
                {:else if skill === "Reporting"}
                    ✏️ {skill}
                {:else if skill === "Design"}
                    ✨ {skill}
                {:else if skill === "Editing"}
                    ✂️ {skill}
                {:else if skill === "Development"}
                    ⌨️ {skill}
                {:else if skill === "Illustration"}
                    🎨 {skill}
                {:else if skill === "Graphics"}
                    📊 {skill}
                {/if}
            </button>
        {/each}
    </div>
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
        />
    {/each}
</div>

<Footer />

<style>
    div.work-samples {
        /* display: flex; */
        width: 85%;
        max-width: 1000px;
        margin: 0 auto;
        /* gap: 2rem; */
        /* flex-wrap: wrap; */
        position: relative;
        margin-top: 2rem;
    }

    div.work-samples :global(a.work-sample:last-of-type) {
        border-bottom: none;
    }

    /* div.work-samples :global(a.work-sample) {
        transition: 0.6s opacity;
    }

    div.work-samples:has(:global(a.work-sample:hover)) :global(a.work-sample:not(:hover)) {
        opacity: 0.25;
    } */

    div.filters {
        margin-top: 2rem;
        background: var(--background);
        position: sticky;
        top: 0;
        z-index: 1000;
        border-bottom: 1px solid var(--light-gray);
        width: 100%;
        margin-bottom: 4rem;
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

    @media only screen and (max-width: 600px){
        div.filter-wrapper {
            flex-wrap: nowrap;
            overflow-x: auto;
            width: 100%;
            padding-left: 8px;
            box-sizing: border-box;
            scrollbar-width: none;
        }

        .filter-wrapper::-webkit-scrollbar {
            display: none;
        }

        .filter-wrapper button {
            flex-shrink: 0;
            font-size: 0.7rem;
        }
    }
</style>

    