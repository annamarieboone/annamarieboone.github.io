import projects from '../../../data/work.json';
import { error } from '@sveltejs/kit';
import { slugify } from '$lib/slugify.js';

export function load({ params }) {
    const project = projects.find(p => slugify(p.Headline) === params.slug);
    if (!project) {
        error(404, 'Project not found');
    }
    return { project };
}

export function entries() {
    return projects
        .filter(p => p.Publish)
        .map(p => ({ slug: slugify(p.Headline) }));
}
